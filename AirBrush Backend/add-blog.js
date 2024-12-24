const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://turquoisecarlee:lIgnMZtRdrKPIMjN@cluster0.qyp4f.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function addBlogPost() {
  try {
    await client.connect();
    console.log("Connected to the database");

    const database = client.db("ai4chat");
    const generatorCollection = database.collection("generator-collection");

    const newBlog = {
      url: "headshot-generator",
      title: "Headshot Generator - Airbrush",
      content: `<div class="blog-detail-inenr-area pt--45 rts-privacy-section-gapBottom plr_sm--15">
        <div class="container-bd">
            <div class="row">
                <div class="col-lg-12">
                    <div class="deal-wrapper">
                      <h5 style="margin-bottom: 0px;">Headshot Generator</h5>
                      <h1>Generate Professional Headshots From Images</h1>
                      <h5>Revolutionize Your Portraits: AI Headshot Generator – The Future of Airbrushed Perfection</h5>
                      <a
                        target="_blank"
                        href="https://app.airbrush.ai/signup"
                        class="deal-btn"
                        >
                        Get started For Free
                      </a>    

                      <h2 style="margin-top: 70px;">Watch Airbrush in Action</h2>
                      <div style="padding: 2%; background-color:#3b086d; border-radius: 2rem;">
                        <iframe width="1120" height="630" src="https://www.youtube.com/embed/Y0yoqVsVm7Q?enablejsapi=1&amp;wmode=opaque" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" id="player_1"></iframe>
                      </div>

                      <div style="margin-top: 100px;">
                        <h1 style="text-align: center;">What is Headshot Generator?</h1>
                        <img style="padding:20px;" src="https://www.airbrush.ai/wp-content/uploads/2023/04/Untitled-design-5-1200x381.png"/>
                        <p style="text-align: center; padding-top:20px;">
                            Introducing the AI Headshot Generator, an innovative airbrush tool that effortlessly enhances and perfects your portraits. Utilizing advanced AI algorithms, this generator effortlessly transforms ordinary selfies into stunning, professional-quality headshots. Experience the magic of instant photo retouching and elevate your personal brand or social media presence with this user-friendly, intuitive tool. Say goodbye to blemishes and hello to flawless, magazine-worthy photos!
                        </p>
                      </div>

                      <div style="margin-top: 100px;">
                        <h2>Start Using Headshot Generator For Free Below</h2>
                        <h6>If you need help, please refer to the video tutorial above or the detailed step-by-step instructions enlisted below.</h6>
                        <iframe src="https://app.airbrush.ai/signup?swap_head=%20Acronym%20Generator%3Cbr%3EPlease%20complete%20the%20signup%20form%20below%20to%20Use%20Acronym%20Generator%20for%20free&amp;ad_ref=AcronymGenerator&amp;redirect_url=boss-mode" title="Writecream - AI Powered Acronym Generator" style="width: 100%; height: 600px; margin-top: 30px; border: 3px solid #f86635; padding: 10px;"></iframe>
                      </div>

                      <div style="margin-top: 100px;">
                        <h2>Follow the simple steps below to get started.</h1>
                        <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 1- Login to your Airbrush account & select Image Variations</h5>
                                <p>
                                    From Airbrush Dashboard Select Image Variations tool to get started.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/1-2-400x213.png"/>
                            </div>
                        </div>
                         <div class="generator-flex" style="flex-direction: row-reverse;">
                            <div class="generator-flex-para">
                                <h5>STEP 2- Enter the Url Of Your Image & Give Description</h5>
                                <p>
                                  Enter your Image url. If you have image locally stored you can use this online tool to upload image and get the link : <a href="https://postimages.org/">https://postimages.org/</a>
                                  <br/><br/>
                                  Enter Given Description – Generate a professional headshot image
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/1-3-400x167.png"/>
                            </div>
                        </div>
                         <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 3- Select AI Engine - Pix2Pix</h5>
                                <p>
                                    From Various AI Engines Select Pix2Pix
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/1-4.png"/>
                            </div>
                        </div>
                         <div class="generator-flex" style="flex-direction: row-reverse;">
                            <div class="generator-flex-para">
                                <h5>STEP 4- Select image dimensions</h5>
                                <p>
                                   Select your desired Image Dimensions.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/3.png"/>
                            </div>
                        </div>
                        <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 5- Advanced Options (Optional)</h5>
                                <p>
                                   If you want to you can select advanced options Like Seed, Negative Prompts and Any Guidance you want to give to ai to better understand your needs.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/5-400x128.png"/>
                            </div>
                        </div>
                        <div class="generator-flex" style="flex-direction: row-reverse;">
                            <div class="generator-flex-para">
                                <h5>STEP 6- Click On Create Image Button.</h5>
                                <p>
                                   Finally click on Create image button and there you go😄
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/5-400x128.png"/>
                            </div>
                        </div>
                        <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 7- Ta-da Your AI Generated Headshot Is Here.</h5>
                                <p>
                                   Ta-da you got your AI generated Headshot of your image. if it doesn’t meet to your expectations just click on Create Image button as many time you want and AI will create More Headshots with Variations for you. And you can download it directly.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/04/Untitled-design-6.png"/>
                            </div>
                        </div>
                      </div>
                        <a href="https://app.airbrush.ai/signup" class="deal-foot-sec">
                            <i class="fa-solid fa-thumbs-up"></i>GET STARTED NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    };

    const result = await generatorCollection.insertOne(newBlog);
    console.log("Blog post added successfully!", result.insertedId);
  } catch (error) {
    console.error("Error adding blog post:", error);
  } finally {
    await client.close();
  }
}

addBlogPost();
