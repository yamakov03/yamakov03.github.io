import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SMIcons";
import Resume from "../components/Resume";

const Home = ({ setPage }) => {
  return (
    <section
      id="home"
      className="flex flex-wrap 
      justify-center 
      items-center 
      border-b-[1px] 
      border-black
      py-20
      home-xl:h-[100vh] 
      min-[500px]:px-10
      sm:px-0"
    >
      {/* IMAGE SECTION */}
      <div
        className="unselect mt-16 md:basis-1/5 sm:basis-3/5
        sm:order-1
        mx-20
        flex"
      >
        <img
            alt="profile"
            className="min-[800px]:max-w-[500px] md:max-w-[300px] unselect home__img z-10 h-auto"
            src="assets/profileImg.jpg"
          />

          
      </div>
      {/* MAIN TEXT */}
      <div
        className="mt-24 items-center 
        z-10
        pb-5 
        justify-end
      md:basis-[100px]
      sm:basis-[300px]
      sm:mt-12 
      md:text-left 
      sm:items-center 
      sm:text-center 
      "
      >
        {/* HEADINGS */}
        <p className="min-[800px]:text-9xl sm:text-6xl font-Syne">Daniel Yamakov</p>
        <p className="mt-2 mb-10 min-[800px]:text-4xl sm:text-xl">
          What's up! I'm studying software engineering at UT Austin.
        </p>
        <div className="inline-flex items-center justify-center flex-wrap">
          <AnchorLink
            className="text-xl inline-flex items-center justify-center
            rounded-xl me-0 min-[800px]:me-5 border-2 border-black text-black bg-accent-color px-5 py-3
            font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
            focus:outline-none focus:shadow-none focus:ring-0 w-[170px]"
            href="#contact"
          >
            Say hello 👋
          </AnchorLink>
          <Resume />
          <div className="justify-center flex min-[800px]:ms-10 min-[800px]:pt-0 pt-5">
          <SocialMediaIcons />
          </div>
          
        </div>
      </div>
    </section>
    
  );
};

export default Home;
