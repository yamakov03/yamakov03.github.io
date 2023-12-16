import React, { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import handleViewport, { useInViewport } from 'react-in-viewport';
import SkillsTicker from "../components/SkillsTicker";
import { AiFillGithub } from "react-icons/ai";
import SubHeader from "../components/SubHeader";

const Project = ({ title, altTitle, desc, link, order, note = "" }) => {
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
    <div className="group flex flex-wrap justify-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        className={`py-10 ${order} max-lg:order-1 cursor-default border-black ${order === "order-1" ? null : "lg:border-r-[1px] "} border-b-[1px] lg:w-1/2 sm:w-full h-auto flex justify-center flex-col xl:ps-[100px] px-6 bg-white group-hover:bg-primary-color transition-colors duration-500`}
      >
        
        <span className="text-4xl max-[800px]:text-2xl text-left font-Syne font-bold items-left">
          {title}
        </span>
        <p className="mt-5 text-md lg:text-xl  xl:pe-[30%] pe-0">{desc}</p>
        <a href={link} className={`${link !== "" ? "visible" : "hidden"} pb-5  group/btn flex align-center items-center w-[150px] mt-4 text-xl transition-opacity duration-200`}>
          <p className={"me-[5px] font-semibold my-2"}>Check it out </p>
          
          <HiArrowNarrowRight className="group-hover/btn:translate-x-1 transition-all" />
          {note !== "" &&
            <span
              class="pointer-events-none border-[1px] rounded-lg border-black text-black flex-wrap absolute mt-[80px] me-[20px] opacity-0 transition-opacity group-hover/btn:opacity-100"
            >
              <p className="px-2 py-1 text-sm">{note}</p>
            </span>
          }
        </a>
      </div>
      {hover ?
        <a href={link !== "" ? link : ""} className={`cursor-pointer bg-black ${order === "order-1" ? "lg:border-r-[1px]" : null} border-r-[0px] border-black border-b-[1px]
          lg:w-1/2 sm:w-full flex overflow-hidden h-auto group-hover:opacity-100 lg:opacity-80 opacity-100 transition-opacity duration-500`}>
          <img
            className="unselect object-cover w-full"
            src={`/assets/projects_gif/${projectTitle}.gif`}
            alt={projectTitle}
          />
        </a>
        :
        <a href={link !== "" ? link : ""} className={`  cursor-pointer  ${order === "order-1" ? "lg:border-r-[1px]" : null} border-r-[0px] group-hover:opacity-100 lg:opacity-80 opacity-100 transition-opacity duration-500 bg-black border-black border-b-[1px] lg:w-1/2 sm:w-full flex overflow-hidden h-auto`}>
          <img
            className="unselect object-cover w-full"
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
      <section id="projects" className="">
        <div className="justify-center border-black bg-white">
          <Project
            title="colorify."
            altTitle="colorify"
            desc="colorify is an open-source MIT-licensed browser extension designed to modify the look of any web element, anywhere. Colorify is available for Chrome."
            link="https://chromewebstore.google.com/detail/colorify/fodfjfhlogpjbjgkoelbfddkahniiblg?hl=en"
            order="order-1"
            note=""
          />
          <Project
            title="spotify-next"
            altTitle="spotifynext"
            desc="A Refreshed Spotify Client built with Next.js 13. Users can login with their Spotify account and access their playlists, saved songs, and more."
            link="https://spotifynxt.vercel.app/"
            order=""
            note="Spotify API requires users to be added manually in dev mode. Please contact me for access!"
          />
          <Project
            title="Toolio"
            altTitle="toolio"
            desc="Toolio is an example lightweight project management platform for developers to manage project resources. Built with Next.js 14, MongoDB, and Material Tailwind."
            link="https://toolio-next.vercel.app/"
            order="order-1"
            note=""
          />
          <Project
            title="Just The News"
            altTitle="news"
            desc="A real-time news parser built with Python and Flask. Users can search for news articles and view the latest headlines."
            link="https://justthenews-flask-app.onrender.com/"
            order=""
            note="The app might take a few seconds to load!"
          />
          <Project
            title="Lite Notes"
            altTitle="LiteNotes"
            desc="A lightweight notes web app built with Python and Flask. Users can create, edit, and delete notes."
            link="https://litenotes-flask-web-app.onrender.com/"
            order="order-1"
            note="The app might take a few seconds to load!"
          />
          <Project
            title="NYC Folio"
            altTitle="nyc"
            desc="My camera and Manhattan's touristy spots, bustling streets, and incredible architecture. Built with Python and Flask."
            link="https://nyc-gallery-app.onrender.com/"
            order=""
            note="The app might take a few seconds to load!"
          />



          {/* <Project
          title="eHills Dynamic Auction Platform"
          desc="A client-server Java application that allows multiple users to bid, purchase and interact with items stored on a MongoDB database. The project contains three main components: the server backend, the client GUI (JavaFX), and the client backend."
          link=""
        />
        <Img
          title="ehills project"
          link=""
        /> */}

        </div>
      </section>
      {/* <SkillsTicker /> */}
    </>
  );
}

export default Projects;
