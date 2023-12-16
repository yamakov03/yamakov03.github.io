import React from "react";
import { RiArrowRightDownLine } from "react-icons/ri";
import Header from "../components/Header";

function Contact() {
  return (
    <section id="contact" className="py-[90px] border-black">
      {/* HEADINGS */}
      <div className="flex">
        <div className="flex flex-col w-full items-center mx-6">
          <div>
            <div className="ms-2">
            <Header text="Say hello." />
            </div>
            <p className="mt-3 mb-2">
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
                  rounded-xl border-[1px] border-black text-black bg-accent-color px-4 py-3
                  font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
                  focus:outline-none focus:ring-0 focus:shadow-none text-xl"
                >
                  Send a message ✉️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
