import React from "react";

const Data = [
  {
    question: "Can I use the generated images for commercial purposes?",
    answer:
      "Yes, users get full usage rights to commercialize the images they create with Airbrush.ai, including the right to reprint, sell, and merchandise. Users can use the AI images for commercial projects, such as illustrations for children's books, art for newsletters, concept art and characters for games, mood boards for design consulting, graphics for websites, storyboards for movies, and much more.",
  },
  {
    question: "What AI engines are supported by Airbrush for image generation?",
    answer:
      "Airbrush supports multiple AI engines for image generation, including Stable Diffusion, Stable Diffusion XL, DALLE-2, Anything, Wifu, Redshift, Analog, Protogen, Realistic Vision, Disney Pixar, Pixel Art, Anime Diffusion, T-shirt Diffusion, Inkpunk, Oscavatar, GraffityMidjourney, Edge of Realism, Double Exposure, Manga, Coloring Pages, All-In-One-Pixel-Model, and more. We are constantly adding new AI models!",
  },
  {
    question: "What image sizes are supported by Airbrush?",
    answer:
      "You can generate images in the following resolutions: 256x256px, 512x512px and 1024x1024px. You can upscale any image up to 4x, which gives a maximum size of 4096x4096px.",
  },
  {
    question: "Does Airbrush have a mobile app?",
    answer:
      "Yes, we have an app for Android devices on the Google Play Store. We are currently working on an app for Apple iPhone and iPad devices.",
  },
];

const FAQS = () => {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">FAQS</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <details
          className="group border-s-4 border-green-500 rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>

      <div>
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQS;
