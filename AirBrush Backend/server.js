const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://turquoisecarlee:lIgnMZtRdrKPIMjN@cluster0.qyp4f.mongodb.net/?retryWrites=true&w=majority";
const uuid = require("uuid");
const cookieParser = require("cookie-parser");
const { marked } = require("marked");
const fetch = require("node-fetch");

const OPENAI_API_KEY = "237e5cfcd2474cb7bf28c076d1054072";
const apiUrl = "https://app.ai4chat.co/v1/chat/completions";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    partialsDir: ["views/partials/"],
    helpers: {
      ifCond: function (v1, operator, v2, options) {
        switch (operator) {
          case "==":
            return v1 == v2 ? options.fn(this) : options.inverse(this);
          case "===":
            return v1 === v2 ? options.fn(this) : options.inverse(this);
          case "!=":
            return v1 != v2 ? options.fn(this) : options.inverse(this);
          case "!==":
            return v1 !== v2 ? options.fn(this) : options.inverse(this);
          case "<":
            return v1 < v2 ? options.fn(this) : options.inverse(this);
          case "<=":
            return v1 <= v2 ? options.fn(this) : options.inverse(this);
          case ">":
            return v1 > v2 ? options.fn(this) : options.inverse(this);
          case ">=":
            return v1 >= v2 ? options.fn(this) : options.inverse(this);
          case "&&":
            return v1 && v2 ? options.fn(this) : options.inverse(this);
          case "||":
            return v1 || v2 ? options.fn(this) : options.inverse(this);
          default:
            return options.inverse(this);
        }
      },
    },
  })
);

app.set("view engine", "hbs");

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err);
  console.log("Connected to Database");

  const db = client.db("ai4chat");
  const rootCollection = db.collection("root-collection");
  const blogCollection = db.collection("blog-collection");
  const gptCollection = db.collection("gpt-collection");
  const characterCollection = db.collection("character-collection");

  app.get("/pages/:url", async (req, res) => {
    rootCollection.findOne({ url: req.params.url }, async (err, page) => {
      if (!page) {
        return res.redirect("/404");
      } else {
        res.render("generator-page", {
          pageTitle: page.pageTitle,
          whatToGenerate: page.whatToGenerate,
          metaDescription: page.metaDescription,
          pageContent: page.pageContent,
          url: page.url,
        });

        let botDetails = page;
        if (botDetails.numberOfRuns === undefined) {
          await rootCollection.updateOne(
            { url: req.params.url },
            { $set: { numberOfRuns: 1 } }
          );
        } else {
          await rootCollection.updateOne(
            { url: req.params.url },
            { $inc: { numberOfRuns: 1 } }
          );
        }
      }
    });
  });

  app.get("/blog", async (req, res) => {
    try {
      const articles = await blogCollection.find({}).toArray();
      articles.forEach((article) => {
        article.date = article.date.toISOString().split("T")[0];
      });
      res.render("blog", { articles: [...articles].reverse() });
    } catch (error) {
      console.error("Error fetching blog articles:", error);
      res.redirect("/error-page");
    }
  });

  app.get("/blog/:url", async (req, res) => {
    try {
      const article = await blogCollection.findOne({ url: req.params.url });
      if (!article) {
        return res.redirect("/404");
      }
      article.date = article.date.toISOString().split("T")[0];
      const relatedArticles = await blogCollection
        .aggregate([
          { $match: { url: { $ne: req.params.url } } },
          { $sample: { size: 3 } },
        ])
        .toArray();
      relatedArticles.forEach((relatedArticle) => {
        relatedArticle.date = relatedArticle.date.toISOString().split("T")[0];
      });
      res.render("blog-detail", {
        article: article,
        relatedArticles: relatedArticles,
      });
    } catch (error) {
      console.error("Error fetching blog article or related articles:", error);
      res.redirect("/error-page");
    }
  });

  // app.post("/add-blog", async (req, res) => {
  //   try {
  //     const newBlog = {
  //       url: req.body.url,
  //       title: req.body.title,
  //       content: req.body.content,
  //       date: new Date(),
  //       author: req.body.author,
  //       summary: req.body.summary,
  //     };

  //     await blogCollection.insertOne(newBlog);
  //     res.status(201).send("Blog post added successfully!");
  //   } catch (error) {
  //     console.error("Error adding blog post:", error);
  //     res.status(500).send("Failed to add blog post.");
  //   }
  // });

  app.post("/generate-response", async (req, res) => {
    const conversation = req.body.messages;
    const assistantMessage = await aiChat(conversation);
    res.json({ message: marked(assistantMessage) });
  });

  function getTotalWordCount(conversation) {
    let totalWordCount = 0;
    for (let i = 0; i < conversation.length; i++) {
      const message = conversation[i];
      const messageContent = message.content;
      const words = messageContent.split(/\s+/);
      const wordCount = words.length;
      totalWordCount += wordCount;
    }
    return totalWordCount;
  }

  async function truncateConversationToWordLimit(conversation, wordLimit) {
    try {
      if (conversation.length === 1) {
        const singleMessage = conversation[0];
        if (getTotalWordCount([singleMessage]) > wordLimit) {
          conversation[0] = await truncateMessageToWordLimit(
            singleMessage,
            wordLimit
          );
        }
      } else {
        let totalWordCount = getTotalWordCount(conversation);
        while (totalWordCount > wordLimit && conversation.length > 0) {
          conversation.shift();
          totalWordCount = getTotalWordCount(conversation);
        }
      }
      return conversation;
    } catch (error) {
      console.error("An error occurred:", error.message);
      throw error;
    }
  }

  async function waitForMeToFinish(delay) {
    let datetime1 = new Date().getTime();
    let datetime2 = datetime1 + delay;
    while (datetime1 < datetime2) {
      datetime1 = new Date().getTime();
    }
  }

  async function aiChat(conversation) {
    let assistantMessage;
    conversation = await truncateConversationToWordLimit(conversation, 3500);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 237e5cfcd2474cb7bf28c076d1054072",
      },
      body: JSON.stringify({
        model: "GPT 4o Mini",
        messages: conversation,
      }),
    };

    const maxRetries = 5;
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        const response = await fetch(
          "https://app.ai4chat.co/api/v1/chat/completions",
          requestOptions
        );
        const data = await response.json();
        assistantMessage = data.choices[0].message.content;
        console.log("Assistant's response:", assistantMessage);
        return assistantMessage;
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed: ${error.message}`);

        if (attempts >= maxRetries) {
          console.error(
            "Function calling failed after multiple attempts:",
            error
          );
          assistantMessage = await chatgpt3(conversation, "gpt-4o-mini");
          console.log("Assistant's response:", assistantMessage);
          return assistantMessage;
        } else {
          await waitForMeToFinish(5000);
        }
      }
    }
  }

  app.get("/gpt/:url", async (req, res) => {
    gptCollection.findOne({ url: req.params.url }, async (err, gpt) => {
      if (!gpt) {
        return res.redirect("/404");
      } else {
        res.render("generator-chat", {
          pageTitle: gpt.pageTitle,
          metaDescription: gpt.metaDescription,
          prompt: gpt.prompt,
          introduction: gpt.introduction,
          mainFunctions: gpt.mainFunctions,
          idealUsers: gpt.idealUsers,
          howToUse: gpt.howToUse,
          faq: gpt.faq,
          conversationStarters: gpt.conversationStarters,
        });

        let botDetails = gpt;

        if (botDetails.numberOfRuns === undefined) {
          await gptCollection.updateOne(
            { url: req.params.url },
            { $set: { numberOfRuns: 1 } }
          );
        } else {
          await gptCollection.updateOne(
            { url: req.params.url },
            { $inc: { numberOfRuns: 1 } }
          );
        }
      }
    });
  });

  app.get("/character/:url", async (req, res) => {
    characterCollection.findOne(
      { url: req.params.url },
      async (err, character) => {
        if (!character) {
          return res.redirect("/404");
        } else {
          res.render("generator-character", {
            pageTitle: character.pageTitle || "",
            metaDescription: character.metaDescription || "",
            prompt: character.prompt || "",
            introduction: character.introduction || "",
            mainFunctions: character.mainFunctions || "",
            idealUsers: character.idealUsers || "",
            howToUse: character.howToUse || "",
            faq: character.faq || "",
            conversationStarters: Array.isArray(character.conversationStarters)
              ? character.conversationStarters
              : [],
          });

          let botDetails = character;

          if (botDetails.numberOfRuns === undefined) {
            await characterCollection.updateOne(
              { url: req.params.url },
              { $set: { numberOfRuns: 1 } }
            );
          } else {
            await characterCollection.updateOne(
              { url: req.params.url },
              { $inc: { numberOfRuns: 1 } }
            );
          }
        }
      }
    );
  });

  app.get("/pricing", (req, res) => {
    res.render("pricing");
  });

  app.get("/ai-headshots", (req, res) => {
    res.render("professional-headshot");
  });

  app.get("/chat", (req, res) => {
    res.render("chat");
  });

  app.get("/image", (req, res) => {
    res.render("image");
  });

  app.get("/voice", (req, res) => {
    res.render("voice");
  });

  app.get("/music", (req, res) => {
    res.render("music");
  });

  app.get("/video", (req, res) => {
    res.render("video");
  });

  app.get("/article-link-generator", (req, res) => {
    res.render("article-link-generator");
  });

  app.get("/blog-post", (req, res) => {
    res.render("blog-detail");
  });

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/404", (req, res) => {
    res.render("404");
  });

  app.get("/faq", (req, res) => {
    res.render("faq");
  });

  app.get("/features", (req, res) => {
    res.render("features");
  });

  app.get("/privacy", (req, res) => {
    res.render("privacy");
  });

  app.get("/terms", (req, res) => {
    res.render("terms");
  });

  app.get("/tutorials", (req, res) => {
    res.render("tutorials");
  });

  app.get("/use-cases", async (req, res) => {
    try {
      const pages = await rootCollection.find({}).toArray();
      res.render("use-cases", { pages });
    } catch (error) {
      console.error("Error fetching pages:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/gpts", async (req, res) => {
    try {
      const gpts = await gptCollection.find({}).toArray();
      res.render("gpts", { gpts });
    } catch (error) {
      console.error("Error fetching gpts:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/characters", async (req, res) => {
    try {
      const characters = await characterCollection.find({}).toArray();
      res.render("characters", { characters });
    } catch (error) {
      console.error("Error fetching gpts:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/sitemap.xml", async (req, res) => {
    try {
      const pages = await rootCollection.find({}).toArray();
      const articles = await blogCollection.find({}).toArray();
      const gpts = await gptCollection.find({}).toArray();
      const characters = await characterCollection.find({}).toArray();
      res.type("application/xml");
      res.render("sitemap", { pages, articles, gpts, characters });
    } catch (error) {
      console.error("Error fetching pages:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.all("*", (req, res) => {
    res.redirect("/404");
  });

  async function chatgpt3(conversation, aiengine) {
    let assistantMessage;
    const model = aiengine === "gpt4" ? "GPT 4o" : "GPT 4o Mini";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: model,
        messages: conversation,
      }),
    };
    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      assistantMessage = data.choices[0].message.content;
      console.log("Assistant's response:", assistantMessage);
      return assistantMessage;
    } catch (error) {
      console.error("Error:", error);
      assistantMessage =
        "There was an error processing your request. Please try again.";
      console.log("Assistant's response:", assistantMessage);
      throw error;
    }
  }

  function ValidateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

app.listen(4000, function () {
  console.log("listening on 4000...");
});
