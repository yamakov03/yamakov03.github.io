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
        className="flex mx-20 mt-16 unselect md:basis-1/5 sm:basis-3/5 sm:order-1"
      >
        <img
          alt="profile"
          className="min-[800px]:max-w-[450px] md:max-w-[300px] unselect home__img z-10 h-auto"
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
      min-[800px]:text-left 
      sm:items-center 
      sm:text-center 
      "
      >
        {/* HEADINGS */}
        <p className="min-[800px]:text-8xl sm:text-6xl font-Syne text-primary">Hi, I'm Daniel Yamakov</p>
        <p className="min-[800px]:text-4xl sm:text-xl text-secondary">Currently Learning</p>
        <p className="mt-2 mb-6 min-[800px]:text-2xl sm:text-xl">
          - Software Engineer @ SpaceX<br />
          - MS Computer Science @ Georgia Tech
        </p>
        <div className="inline-flex items-center min-[800px]:justify-start justify-center flex-wrap max-[799px]:gap-7">
          <AnchorLink
            className="text-xl inline-flex items-center justify-center
            rounded-xl border-[1px] border-black bg-secondary px-5 py-3
            font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
            focus:outline-none focus:shadow-none focus:ring-0 w-[170px] hover:border-black btn-lg btn btn-secondary"
            href="#contact"
          >
            Say hello 👋
          </AnchorLink>
          <div className="justify-center flex min-[800px]:ms-10 min-[800px]:pt-0">
            <SocialMediaIcons />
          </div>

        </div>
      </div>
    </section>

  );
};

export default Home;
