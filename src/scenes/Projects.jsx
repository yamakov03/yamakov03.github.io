import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import handleViewport, { useInViewport } from 'react-in-viewport';

const Project = ({ title, altTitle, desc, link, order }) => {
  const projectTitle = altTitle.split(" ").join("-").toLowerCase();
  const [hover, setHover] = React.useState(false);
  return (
    <div className="group flex flex-wrap justify-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        className={`py-10 ${order} max-lg:order-1 cursor-default border-black ${order === "order-1" ? null : "lg:border-r-[1px] "} border-b-[1px] lg:w-1/2 sm:w-full h-auto flex justify-center flex-col ps-[30px] xl:ps-[100px] px-4 bg-white group-hover:bg-primary-color transition-colors duration-500`}
      >
        <p className="text-2xl w-full font-syne">{title}</p>
        <p className="mt-5 text-md lg:text-xl  xl:pe-[30%] pe-0">{desc}</p>
        {/* <a href={link}
            className={` ${link !== "" ? "visible" : "hidden"} mt-5 text-xl inline-flex items-center justify-center
            rounded-xl border-2 border-black text-black bg-accent-color px-5 py-3
            font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none 
            focus:outline-none focus:shadow-none focus:ring-0 w-[200px]`}
            href="#contact"
          >
            <p className={"me-[5px] font-semibold"}>Check it out </p>
            <HiArrowNarrowRight />
          </a> */}
        <a href={link} className={`${link !== "" ? "visible" : "hidden"} flex align-center items-center w-[150px] mt-4 text-xl hover:opacity-50 transition-opacity duration-200`}>
          <p className={"me-[5px] font-semibold my-2"}>Check it out </p>
          <HiArrowNarrowRight />
        </a>
      </div>
      {hover || window.innerWidth < 1024 ?
        <a href={link !== "" ? link : ""} className={`cursor-pointer bg-black ${order === "order-1" ? "lg:border-r-[1px]" : null} border-r-[0px] border-black border-b-[1px]
  lg:w-1/2 sm:w-full flex overflow-hidden h-auto group-hover:opacity-100 opacity-100 lg:opacity-80 transition-opacity duration-500`}>
          <img
            className="
    unselect object-cover w-full"
            src={`/assets/projects_gif/${projectTitle}.gif`}
            alt={projectTitle}
          />
        </a>
        :
        <a href={link !== "" ? link : ""} className={`  cursor-pointer  ${order === "order-1" ? "lg:border-r-[1px]" : null} border-r-[0px] group-hover:opacity-100 opacity-80 transition-opacity duration-500 bg-black border-black border-b-[1px]
  lg:w-1/2 sm:w-full flex overflow-hidden h-auto`}>
          <img
            className="
    unselect object-cover w-full"
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
    <section id="projects" className="">
      {/* HEADINGS */}
      <div className="justify-center flex items-center h-[200px] bg-primary-color">
        <span className="text-5xl xl:text-6xl font-Syne font-semibold text-center">
          Featured Projects
          {/* <span className="blinker relative top-[-5px]">|</span> */}
        </span>
      </div>

      {/* PROJECTS */}
      <div className="justify-center border-black border-t-[1px] bg-white">

        <Project
          title="Spotify Next"
          altTitle="spotifynext"
          desc="A Refreshed Spotify Client built with Next.js 13. Users can login with their Spotify account and access their playlists, saved songs, and more."
          link="https://spotifynxt.vercel.app/"
          order="order-1"
        >
        </Project>
        <Project
          title="JustTheNews: Real-Time News Parser"
          altTitle="news"
          desc="A real-time news parser built with Python and Flask. Users can search for news articles and view the latest headlines."
          link="https://justthenews-flask-app.onrender.com/"
          order=""
        />
        <Project
          title="LiteNote: Lightweight Notes Web Application"
          altTitle="LiteNotes"
          desc="A lightweight notes web app built with Python and Flask. Users can create, edit, and delete notes."
          link="https://litenotes-flask-web-app.onrender.com/"
          order="order-1"
        />
        <Project
          title="Manhattan NYC Folio"
          altTitle="nyc"
          desc="My camera and Manhattan's touristy spots, bustling streets, and incredible architecture. Built with Python and Flask."
          link="https://nyc-gallery-app.onrender.com/"
          order=""
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
  );
}

export default Projects;
