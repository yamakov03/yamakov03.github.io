import React, { useEffect } from "react";
import { HiArrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Header from "../components/Header";
import { Carousel } from "flowbite-react";

const Project = ({ title, altTitle, desc, link, tag, note = "" }) => {
  const projectTitle = altTitle.split(" ").join("-").toLowerCase();
  const [hover, setHover] = React.useState(false);
  useEffect(() => {
    window.addEventListener('resize', function (event) {
      if (window.innerWidth < 1024) {
        setHover(true);
      } else {
        setHover(false);
      }
    }, true);
  }, [])

  return (
    <div className="flex h-full w-full max-[800px]:flex-col justify-center p-3 duration-500 border border-black rounded-2xl group bg-base-200 hover:bg-base-300" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} id={tag}>
      <div
        className={` order-1 flex justify-center flex-col  px-6 transition-colors duration-500 lg:w-[60%] w-[90%] md:me-[35px] me-0 `}
      >

        <span className="text-4xl max-[800px]:text-2xl max-[800px]:mt-[20px] text-left font-Syne font-bold items-left">
          {title}
        </span>
        <p className="mt-5 text-md lg:text-xl">{desc}</p>
        <a href={link} className={`${link !== "" ? "visible" : "hidden"}`}>

          <div class={`flex items-center ${note !== "" ? "tooltip tooltip-secondary" : ""}`} data-tip={note}>
            <p className={"me-[5px] font-semibold my-2"}>Check it out </p>
            <HiArrowNarrowRight />
          </div>
        </a>
      </div>
      {hover ?
        <a href={link !== "" ? link : ""} className={`cursor-pointer border-black border
          w-full flex overflow-hidden h-auto group-hover:opacity-100 lg:opacity-80 opacity-100 transition-opacity duration-500 rounded-2xl`}>
          <img
            className="object-cover w-full unselect rounded-2xl"
            src={`/assets/projects_gif/${projectTitle}.gif`}
            alt={projectTitle}
          />
        </a>
        :
        <a href={link !== "" ? link : ""} className={`  cursor-pointer border-black border
        w-full flex overflow-hidden h-auto group-hover:opacity-100 lg:opacity-80 opacity-100 transition-opacity duration-500 rounded-2xl`}>
          <img
            className="object-cover w-full unselect rounded-2xl"
            src={`/assets/projects_gif/${projectTitle}.png`}
            alt={projectTitle}
          />
        </a>


      }

    </div>


  );
};

function Projects() {

  return (
    <>

      <section id="projects" className="flex w-full flex-col items-center justify-center border-black border-b-[1px] pb-[60px]">
        <div className="w-full p-0 mt-[50px] lg:w-5/6 lg:p-3 ps-5 pb-2">
          <Header text="Projects" />
        </div>

        <Carousel pauseOnHover indicators slide slideInterval={3000} rightControl={
          <button className="btn btn-circle btn-primary shadow-none border border-black hover:bg-base-500 hover:border-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

          </button>
        } leftControl={
          <button className="btn btn-circle btn-primary shadow-none border border-black hover:bg-base-500 hover:border-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

          </button>
        } class="max-w-[1300px] relative space-x-4 p-2 w-full">
          <Project
            title="colorify."
            altTitle="colorify"
            desc="colorify is an open-source MIT-licensed browser extension designed to modify the look of any web element, anywhere. Colorify is available for Chrome."
            link="https://chromewebstore.google.com/detail/colorify/fodfjfhlogpjbjgkoelbfddkahniiblg?hl=en"
            tag="project1"
            note=""
          />
          <Project
            title="spotify-next"
            altTitle="spotifynext"
            desc="A Refreshed Spotify Client built with Next.js 13. Users can login with their Spotify account and access their playlists, saved songs, and more."
            link="https://spotifynxt.vercel.app/"
            tag="project2"
            note="Spotify API requires users to be added manually in dev mode. Please contact me for access!"
          />
          <Project
            title="Toolio"
            altTitle="toolio"
            desc="Toolio is an example lightweight project management platform for developers to manage project resources. Built with Next.js 14, MongoDB, and Material Tailwind."
            link="https://toolio-next.vercel.app/"
            tag="project3"
            note=""
          />
          <Project
            title="Just The News"
            altTitle="news"
            desc="A real-time news parser built with Python and Flask. Users can search for news articles and view the latest headlines."
            link="https://justthenews-flask-app.onrender.com/"
            tag="project4"
            note="The app might take a few seconds to load!"
          />
          <Project
            title="Lite Notes"
            altTitle="LiteNotes"
            desc="A lightweight notes web app built with Python and Flask. Users can create, edit, and delete notes."
            link="https://litenotes-flask-web-app.onrender.com/"
            tag="project5"
            note="The app might take a few seconds to load!"
          />
          <Project
            title="NYC Folio"
            altTitle="nyc"
            desc="My camera and Manhattan's touristy spots, bustling streets, and incredible architecture. Built with Python and Flask."
            link="https://nyc-gallery-app.onrender.com/"
            tag="project6"
            note="The app might take a few seconds to load!"
          />
        </Carousel>
      </section >
      {/* <SkillsTicker /> */}
    </>
  );
}

export default Projects;
