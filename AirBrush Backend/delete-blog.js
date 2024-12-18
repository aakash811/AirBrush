const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://turquoisecarlee:lIgnMZtRdrKPIMjN@cluster0.qyp4f.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function deleteBlogPost() {
  try {
    await client.connect();
    console.log("Connected to the database");

    const database = client.db("ai4chat");
    const blogCollection = database.collection("blog-collection");

    const query = {
      title:
        "Exploring the Impact of Artificial Intelligence and AI Art in Education",
    };

    const result = await blogCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("Blog post deleted successfully!");
    } else {
      console.log("No blog post found with the given criteria.");
    }
  } catch (error) {
    console.error("Error deleting blog post:", error);
  } finally {
    await client.close();
  }
}

deleteBlogPost();
