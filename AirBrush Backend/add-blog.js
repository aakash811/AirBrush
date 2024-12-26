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
      url: "airbrush-ai-stable-diffusion-ai-art-generator",
      title: "Airbrush AI | Stable Diffusion AI Art Generator - Airbrush",
      content: `<div class="blog-detail-inenr-area pt--15 rts-privacy-section-gapBottom plr_sm--15">
        <div class="container-bd">
            <div class="row">
                <div class="col-lg-12">
                    <div class="deal-wrapper">
                        <div style="margin-bottom: 30px;" class="generator-title">Easy Diffusion AI Art Generator</div>
                        <h1>Experience Easy Diffusion With AI</h1>
                        <h6>Transform your ideas into stunning visuals with Easy Diffusion AI.</h6>
                        <a
                            target="_blank"
                            href="https://app.airbrush.ai/signup"
                            class="deal-btn"
                        >
                            Get started For Free
                        </a>

                        <h2 style="margin-top: 70px;">Watch Airbrush in Action</h2>
                        <div
                            style="padding: 2%; background-color:#3b086d; border-radius: 2rem;"
                        >
                            <iframe width="1120" height="630" src="https://www.youtube.com/embed/VLe1-bw_JGc?enablejsapi=1&amp;wmode=opaque" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" id="player_1"></iframe>
                        </div>

                        <div style="margin-top: 100px;">
                            <h2 style="text-align: center;">What is Easy Diffusion AI Image Generator?</h2>
                            <img
                            style="padding:20px;"
                            src="https://www.airbrush.ai/wp-content/uploads/2023/08/Navy-Creative-How-Artificial-Intelligence-Youtube-Thumbnail.png"
                            />
                            <p style="text-align: center; padding-top:20px;">
                               The Easy Diffusion AI Image Generator is a cutting-edge solution designed to provide users with a seamless and user-friendly experience when creating images. With a focus on stable diffusion, our platform utilizes the latest AI technology to ensure that the image generation process is both reliable and consistent. Easy Diffusion 2.5 introduces an enhanced UI that simplifies the process, allowing users to effortlessly navigate through various options and prompts. Whether you’re a content creator on YouTube, a designer utilizing plugins, or a member of the Discord community seeking unique visuals, our platform caters to diverse needs. However, it’s important to note that while our AI strives to provide accurate results, there might be variations. Refer to our disclaimer for more information. Elevate your image creation process with Easy Diffusion AI Image Generator today!
                            </p>
                        </div>


                        <div style="margin-top: 100px;">
                            <h2>Start Using AI Art Personalizer For Free Below</h2>
                            <h6>If you need help, please refer to the video tutorial above or the detailed step-by-step instructions enlisted below.</h6>
                            <iframe
                            src="https://app.airbrush.ai/signup?swap_head=%20Acronym%20Generator%3Cbr%3EPlease%20complete%20the%20signup%20form%20below%20to%20Use%20Acronym%20Generator%20for%20free&amp;ad_ref=AcronymGenerator&amp;redirect_url=boss-mode"
                            title="Writecream - AI Powered Acronym Generator"
                            style="width: 100%; height: 600px; margin-top: 30px; border: 3px solid #f86635; padding: 10px;"
                            ></iframe>
                            <h2>Main Features and Capabilities</h2>
                            <p>
                            Our platform offers a range of impressive features that cater to both novice and experienced users. With stable diffusion and a user-friendly interface (UI), even those with basic technical knowledge can effortlessly generate and share captivating content. Our intuitive plugin ensures that the diffusion process remains simple, while comprehensive tutorials walk you through every step, eliminating any confusion. Whether you’re a seasoned computer whiz or just starting out, you’ll find that creating and previewing today’s videos has never been easier. Choose your topic, harness the powerful tools at your disposal, and face the world of content diffusion with confidence.
                            <br/><br/>
                            In today’s fast-paced digital landscape, effective content diffusion is paramount. Our user-centric platform revolutionizes this process by making it accessible to everyone. Even if you’re not well-versed in technical intricacies, our straightforward UI ensures stable diffusion without any hassle. With a plethora of tutorials ranging from the simple basics to more advanced techniques, you’ll quickly grasp the power of our platform. Today’s video diffusion is at your fingertips, and we’ll guide you through every step. Whether you’re looking to generate informative content or share a compelling story, our plugin’s capabilities are tailored to your needs. So, dive in and discover how easy it is to preview, generate, and share engaging content – all in one place.
                            </p>
                        </div>

                        <div style="margin-top: 100px;">
                            <h2>Follow the simple steps below to get started.</h2>
                            <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>TEP 1- Login to your Airbrush account & select Create Image</h5>
                                <p>
                                From Airbrush Dashboard Select Create Image tool to get started.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/04/Screenshot-2023-04-15-154614-400x212.png"
                                />
                            </div>
                            </div>
                            <div class="generator-flex" style="flex-direction: row-reverse;">
                            <div class="generator-flex-para">
                                <h5>STEP 2- Enter the Description for image creation</h5>
                                <p>
                                    Enter your desired description to create image.
                                    <br/><br/>
                                    For Example you can try this prompt – ” The Romantic Stormy Voyage”
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/07/Screenshot-2023-07-28-210018-400x287.png"
                                />
                            </div>
                            </div>
                            <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 3- Select AI Engine as - Stable Diffusion</h5>
                                <p>
                                   From Various AI Engines Select Stable Diffusion.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/04/2.png"
                                />
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
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/04/3.png"
                                />
                            </div>
                            </div>
                            <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 5- Advanced Options (Optional)</h5>
                                <p>
                                If you want to you can select advanced options Like Seed,
                                Negative Prompts and Any Guidance you want to give to ai to
                                better understand your needs.
                                </p>
                            </div>
                            <div class="generator-flex-img">
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/04/5-400x128.png"
                                />
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
                                <img
                                src="https://www.airbrush.ai/wp-content/uploads/2023/04/5-400x128.png"
                                />
                            </div>
                            </div>
                            <div class="generator-flex">
                            <div class="generator-flex-para">
                                <h5>STEP 7- Ta-da Your Easy Diffusion Art is here.</h5>
                                <p>
                                Ta-da you got your Easy Diffusion Art, if it doesn’t meet to your expectations just click on Create Image button as many time you want and AI will create Personalized for you. And you can download it directly and use it anywhere without thinking about any copyright issues.
                                </p>
                            </div>
                                <div class="generator-flex-img">
                                    <img
                                    src="https://www.airbrush.ai/wp-content/uploads/2023/08/Screenshot-2023-08-16-172016.png"
                                    />
                                </div>
                            </div>
                        </div>
                        </div>

                        <div style="margin-top:80px; display: flex; justify-content:center;">
                            <img src="https://www.airbrush.ai/wp-content/uploads/2023/08/Blue-Purple-Modern-Technology-Artificial-Intelligence-Youtube-Thumbnail.png"/>
                        </div>

                        <div style="margin-top:100px;">   
                        <div class="generator-title" style="text-align: center;">
                        Exploring the Benefits of Stable Diffusion for AI Art
                        </div>
                        <p style="padding-top:20px;">
                        Discover the multitude of benefits that the easy stable diffusion model brings to the realm of AI art generation. As an advanced AI art generator, Easy Stable Diffusion revolutionizes creative possibilities. By utilizing the stable diffusion model, users can effortlessly run stable diffusion through a simple text prompt, instantly translating their imaginative concepts into captivating pixelated artworks. Embracing the power of generative AI, it enables artists to effortlessly create AI-generated masterpieces, leveraging the stability AI provides. Whether you’re an experienced digital artist or a newcomer to the art scene, the user-friendly interface of Stable Diffusion online empowers everyone to harness the potential of stable diffusion image generation. Experience the innovation today with the free AI art generator, and witness firsthand the transformative influence of diffusion to create stunning, stable AI-generated artworks.
                        </p>
                        </div>

                        <div class="generator-title" style="text-align: left; margin-top:80px;">
                            How to Use Easy Diffusion AI Image Generator in Airbrush?
                        </div>
                        <div class="gene-flex">
                            <div style="display: flex; flex-direction: column; justify-content: center;">
                                <p style="padding-top:20px;">
                                If you’re a creative at heart looking to venture into the world of digital art, our Easy Diffusion AI Image Generator in Airbrush is your ideal companion. Designed with a user-friendly interface, this tool doesn’t require technical knowledge to master. Whether you’re a seasoned artist or just starting, the simple drawing tool provided by Easy Diffusion AI makes image creation a breeze. To get started, all you need to do is join our platform and agree to the terms. Once you’re in, a list of creative options will be at your fingertips, allowing you to effortlessly create 512×512 images with less effort. From there, you can even level up to crafting 768×768 images with less than you’d expect. With Easy Diffusion AI, learning and accessing advanced image creation has never been more straightforward.
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: column; justify-content: center;">
                                <p style="padding-top:20px;">
                                At Easy Diffusion AI, we understand that creativity should know no bounds. With our innovative image generator, crafting stunning visuals is as simple as a few clicks. Regardless of whether you’re a beginner or a seasoned pro, our friendly interface guides you across the creative journey. Say goodbye to the days of spending hours perfecting an image – now, you can create images with less than 3 steps, all thanks to Easy Diffusion AI. So, if you’re ready to step forward into the world of effortless image creation, join us and explore the possibilities that await.
                                </p>
                            </div>
                        </div>

                        <div style="margin-top:100px;">   
                        <div class="generator-title" style="text-align: center;">
                        Creating Custom Image Styles and Effects
                        </div>
                        <p style="padding-top:20px;">
                        Solving the problem of complex image styling has never been easier with our platform. Whatever your creative vision entails, our intelligent model detection ensures precise results as you experiment with custom styles and effects. With the convenience of multiple prompts in a single file, you can seamlessly agree to these terms and witness the magic of text-to-image conversion. Whether you’re a web designer seeking to enhance your site’s visuals or simply looking to check out the latest platform from Hugging Face, our user-friendly interface is here to decrease your workload and increase your creative potential.
                        </p>
                        </div>

                        <div class="gene-flex" style="margin-top: 80px;">
                             <div style="display: flex; flex-direction: column;">
                                <div class="generator-title" style="text-align: center;">
                                Using Easy Diffusion for Video and Media Projects
                                </div>
                                <p style="padding-top:20px;">
                                Using Easy Diffusion for video and media projects offers a streamlined solution that caters to your creative needs. With our stable diffusion UI, you can now achieve faster performance and smoother results, all in a user-friendly environment. Today’s media landscape demands efficient handling of multiple prompts files, and that’s where our platform comes in. By providing a seamless experience, we contribute to enhancing your projects’ diffusion process. So, whether you’re a seasoned professional or just starting, our easy diffusion tools are here to support you every step of the way. Don’t settle for less – choose easy diffusion and transform your creative journey.
                                </p>
                            </div>
                            <div class="gene-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/08/undraw_organizing_projects_re_9p1k.svg"/>
                            </div>
                        </div>

                        <div class="gene-flex" style="margin-top: 80px;">
                            <div class="gene-img">
                                <img src="https://www.airbrush.ai/wp-content/uploads/2023/08/Screenshot-2023-08-09-012213.png"/>
                            </div>
                             <div style="display: flex; flex-direction: column;">
                                <div class="generator-title" style="text-align: center;">
                                Airbrush: Free Image Generation Models Available
                                </div>
                                <p style="padding-top:20px;">
                                Introducing Airbrush: Your go-to platform for free, open-source generative AI tools. Powered by the cutting-edge Laion learning model, Airbrush allows you to effortlessly bring your creative vision to life by generating incredible images. With features like the AI upscaler, background remover, and image settings, you can fine-tune every detail to perfection. Utilize the power of artificial neural networks to reverse or enhance images, even using negative prompts. Whether you’re an image editing enthusiast or a professional designer, Airbrush provides an extensive training dataset and the ability to produce stunning visuals. No need for an account – just dive in and explore the magic of AI-driven art. Check out our FAQs for answers to your questions and earn extra credits to unlock advanced features. Transform random pixels into beautiful images with Airbrush 1.0, making generative AI accessible to all.
                                </p>
                            </div>
                        </div>

                        <div class="gene-flex" style="margin-top: 80px;">
                        <div style="display: flex; flex-direction: column;">
                        <div class="generator-title" style="text-align: center;">
                        How Does Stable Diffusion Enable the Creation of Generative Art?
                        </div>
                        <p style="padding-top:20px;">
                        Easy Diffusion revolutionizes generative art creation through the cutting-edge technology of Stable Diffusion AI art generator. This innovative tool empowers users to effortlessly create stunning ai-generated art pieces. By utilizing artificial intelligence and machine learning, users can now transform their imaginative concepts into captivating visual realities. Simply access the Stable Diffusion web platform, where the magic happens within seconds. Whether you’re a seasoned artist or just starting, the user-friendly interface lets you play around with Stable Diffusion to generate images from text, inspired by the likes of DALL-E and NightCafe Creator. This advanced ai text-to-image generator, with its simple steps, opens up a world of possibilities in generative ai art. Explore the realm of generative art with Easy Diffusion and witness the captivating synergy between your creativity and cutting-edge technology.
                        </p>
                        </div>
                        <div class="gene-img">
                            <img src="https://www.airbrush.ai/wp-content/uploads/2023/08/undraw_art_lover_re_fn8g.svg"/>
                        </div>
                        </div>

                        <a href="https://app.airbrush.ai/signup" class="deal-foot-sec">
                            <i class="fa-solid fa-thumbs-up"></i>GET STARTED NOW
                        </a>

                        <div class="deal-foot-sec-1" onclick="openModal()">
                        EXAMPLE PROMPTS TO TRY
                        </div>

                        <div id="popupModal" class="modal hidden">
                            <div class="modal-content">
                                <span class="close-btn" onclick="closeModal()" style="color:#808080; font-size: 35px; font-weight:800;font-style:bold;">&times;</span>
                                <h3>Example Prompts to try:</h3>
                                <ul style="border-bottom: 1px solid #a0a0a0; margin-top: -10px;">
                                    <ul style="color:#808080">1. “Create a serene landscape inspired by my love for nature and the outdoors, incorporating my favorite colors: blues, greens, and earth tones.”</ul>
                                    <ul style="color:#808080">2. “Design a geometric abstract piece with a mid-century modern aesthetic, using bold shapes and a color palette of orange, mustard, and teal.”</ul>
                                    <ul style="color:#808080">3. “Craft a whimsical illustration of a bustling city scene, reflecting my passion for urban life and highlighting iconic landmarks, with a touch of pastel hues.”</ul>
                                    <ul style="color:#808080">4. “Generate a dynamic, futuristic concept art that showcases my fascination with space exploration and cutting-edge technology, using vivid shades of purple, blue, and silver.”</ul>
                                    <ul style="color:#808080">5. “Produce an enchanting underwater scene filled with vibrant marine life and intricate coral reefs, reflecting my interest in ocean conservation and marine biology.”</ul>
                                    <ul style="color:#808080">6. “Personalize a minimalistic, monochromatic portrait capturing my love for simplicity and elegance, using various shades of gray.”</ul>
                                    <ul style="color:#808080">7. “Construct a visually striking, graffiti-inspired street art piece that incorporates my passion for social justice and activism, with bold, eye-catching colors and powerful messaging.”</ul>
                                    <ul style="color:#808080">8. “Develop a vintage travel poster inspired by my favorite vacation destinations, incorporating retro design elements and a nostalgic color scheme.”</ul>
                                    <ul style="color:#808080">9. “Create a dreamy, celestial-themed artwork that captures my fascination with astrology and the night sky, using a palette of deep blues, purples, and shimmering gold.”</ul>
                                    <ul style="color:#808080">10. “Design a playful, cartoon-inspired illustration that celebrates my love for animals and wildlife, featuring a lively cast of characters and a cheerful color palette.”</ul>
                                </ul>
                                <div class="modal-btn" onclick="closeModal()">
                                    Close
                                </div>
                            </div>
                        </div>
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
