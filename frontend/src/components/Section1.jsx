import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Section1() {
  return (
    <div className="relative overflow-hidden bg-white mt-28">
      <div className="flex justify-evenly gap-20 lg:mx-5 mx-auto px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-3xl pb-80 pt-14 sm:pb-40 sm:pt-3 lg:pb-48 lg:pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-2xl">
            Use case
          </h1>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            High Quality images for <br />
            every use-case
          </h1>
          <div className="text-3xl tracking-tight text-gray-500 sm:text-2xl mt-5">
            If you're looking for high quality images, you have to look no
            further than Airbrush. Airbrush provides a wide variety of images
            that can be used in any type of project, from advertisements to
            websites to presentations. Airbrush offers a variety of pricing
            options so that you can find the perfect image for your project. You
            can also search for the right image by using keywords or tags, and
            save your favorite images for quick and easy access.
          </div>
          <div class="mt-10 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto rounded-md bg-gray-300 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2 h-[700px] gap-5 relative">
              <div className="rounded-[1vw] h-full w-full relative overflow-hidden">
                <img src={"1.jpg"} alt="image" fill className=" object-cover" />
              </div>
              <div className="rounded-[1vw] h-full w-full relative overflow-hidden">
                <img src={"7.jpg"} alt="image" fill className="rounded-[1vw]" />
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-[700px] gap-5 mt-32 relative">
              <div className="rounded-[1vw] h-full w-full relative overflow-hidden">
                <img src={"9.jpg"} alt="image" fill className="rounded-[1vw]" />
              </div>
              <div className="rounded-[1vw] h-full w-full relative overflow-hidden">
                <img src={"6.jpg"} alt="image" fill className="rounded-[1vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
