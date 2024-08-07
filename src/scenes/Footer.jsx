import React from "react";
import SocialMediaIcons from "../components/SMIcons";

function Footer() {
  return (
    <section className="border-black bg-base-100 border-t-[1px] z-40 w-full py-5">
      <div className="flex items-center max-[600px]:flex-wrap mx-auto w-5/6">
        <div className="flex mt-4 space-x-6 lg:w-1/2 sm:w-full lg:justify-start sm:justify-center sm:mt-0">
          <span className="text-sm sm:text-center">© 2024 Daniel Yamakov</span>
        </div>
        <div className="flex lg:w-1/2 sm:w-full lg:justify-end sm:justify-center lg:mt-0 max-[600px]:mt-3">
          <div className="text-left">
            <SocialMediaIcons />
          </div>
        </div>


      </div>
    </section>
  );
}

export default Footer;
