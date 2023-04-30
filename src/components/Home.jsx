import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./SMIcons";

const Home = ({ setPage }) => {
  const isMobile = useMediaQuery("(max-width: 760px)");
  return (
    <section
      id="home"
      className="flex flex-wrap 
      justify-center 
      items-center 
      border-b-[1px] 
      border-black 
      bg-slate-50 
      semi:h-[75vh] 
      py-10"
    >
      {/* IMAGE SECTION */}
      <div
        className="unselect mt-16 lg:basis-1/5 md:basis-2/5
        semi:order-2
        flex 
      md:pe-10 
      sm:pe-0"
      >
        {!isMobile ? (
          <img
            alt="profile"
            className="home__img z-10 max-w-[300px] 
            h-auto
            "
            src="assets/profileImg.jpg"
          />
        ) : (
          <img
            alt="profile"
            className="unselect home__img z-10 max-w-[300px] h-auto"
            src="assets/profileImg.jpg"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div
        className="mt-24 items-center 
        pb-5 
        justify-end
      basis-3/5
      md:basis-[100px]
      sm:basis-[300px]
      sm:mt-12 
      md:text-left 
      sm:items-center 
      sm:text-center 
      "
      >
        {/* HEADINGS */}
        <p className="md:text-7xl sm:text-5xl font-Syne">Daniel Yamakov</p>
        <p className="mt-2 mb-10 md:text-3xl sm:text-xl">
          Studying software engineering at UT Austin
        </p>
        <div className="md:inline-flex items-center">
          <AnchorLink
            className="text-xl items-center justify-center
            rounded-xl border-4 border-black text-black bg-pink-50 px-10 py-4
            font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
            focus:outline-none focus:ring active:bg-pink-50 w-[200px] "
            href="#contact"
          >
            Say hello 👋
          </AnchorLink>
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
};

export default Home;
