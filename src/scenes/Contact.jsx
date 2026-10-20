import React from "react";
import { RiArrowRightDownLine } from "react-icons/ri";
import Header from "../components/Header";

function Contact() {
  return (
    <section id="contact" className="py-[70px] border-black bg-base-200">
      {/* HEADINGS */}
      <div className="flex">
        <div className="flex flex-col items-center w-full mx-6">
          <div>
            <Header text="Say hello" />
            <p className="mt-3 mb-2">
              I'm always open to talk about jobs, projects, or research.
            </p>
            <div className="pt-4 mx-auto max-w-(--breakpoint-md)">
              <form
                acceptCharset="utf-8"
                action="https://getform.io/f/a0f6c2b3-7152-453f-9c97-fc19c10be30d"
                method="POST"
                noValidate
                className="space-y-8"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="text__box block p-3 w-full transition hover:shadow-none 
                    focus:outline-hidden focus:shadow-none bg-base-100"
                    placeholder="John Doe*"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium ">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="text__box block w-full p-2.5 transition hover:shadow-none 
                    focus:outline-hidden focus:shadow-none bg-base-100"
                    placeholder="name@example.com*"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="text__box block p-2.5 w-full transition hover:shadow-none
                    focus:outline-hidden focus:shadow-none bg-base-100"
                    placeholder="Write something here*"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="items-center justify-center flex
                  rounded-xl border-[1px] border-black btn-lg btn btn-secondary px-4 py-3
                  shadow-[6px_6px_0_0_#000] transition hover:shadow-none
                  focus:outline-hidden focus:ring-0 focus:shadow-none hover:border-black text-xl"
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
