import React from "react";
import { RiArrowRightDownLine } from "react-icons/ri";

function Contact() {
  return (
    <section id="contact" className="pt-[150px]">
      {/* HEADINGS */}
      <div className="flex">
        <div className="flex flex-col lg:w-1/2 sm:w-full lg:items-end sm:items-center lg:me-20 mx-10">
          <div>
            <span className="text-4xl text-left font-Syne font-extrabold items-left highlight-yellow-bg">
              Just say hi.
            </span>
            <p className="w-3/5 mt-8 mb-2">
              I'm always open to talk about jobs, projects, or research.
            </p>
            <div class="pt-4 mx-auto max-w-screen-md">
              <form
                accept-charset="utf-8"
                action="https://getform.io/f/a0f6c2b3-7152-453f-9c97-fc19c10be30d"
                method="POST"
                novalidate
                class="space-y-8"
              >
                <div>
                  <label for="name" class="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="text__box block p-3 w-full transition hover:shadow-none 
                    focus:outline-none focus:shadow-none"
                    placeholder="John Doe*"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 font-medium ">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="text__box block w-full p-2.5 transition hover:shadow-none 
                    focus:outline-none focus:shadow-none"
                    placeholder="name@example.com*"
                    required
                  />
                </div>

                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 font-medium">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    class="text__box block p-2.5 w-full transition hover:shadow-none
                    focus:outline-none focus:shadow-none"
                    placeholder="Write something here*"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="items-center justify-center flex
                  rounded-xl border-2 border-black text-black bg-accent-color px-4 py-3
                  font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
                  focus:outline-none focus:ring-0 focus:shadow-none"
                >
                  Send message ✉️
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="flex w-1/2 justify-left items-center max-[1024px]:hidden lg:visible">
          <div className="rounded-xl border-2 border-black text-black font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none">
            <img
              alt="map"
              src="assets/map.png"
              className="rounded-xl unselect"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end z-30 lg:text-[400px] lg:m-[-50px] sm:m-[0px] sm:text-[200px]">
        <RiArrowRightDownLine />
      </div>
    </section>
  );
}

export default Contact;
