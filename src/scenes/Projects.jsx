import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Project = ({ title, desc, link, hasLink }) => {
  return (
    <a
      href={link}
      className={`${
        hasLink ? "cursor-pointer" : "cursor-default"
      } border-black md:border-r-[1px] sm:border-r-[0px] border-b-[1px] min-[1155px]:w-1/4 lg:w-1/2 sm:w-full lg:h-[400px] sm:h-[400px] flex justify-center flex-col ps-[30px] px-4`}
    >
      <p className="text-2xl w-full">{title}</p>
      <p className="mt-5 w-full">{desc}</p>
      <div className={`${hasLink ? "visible" : "hidden"} flex align-center items-center w-full`}>
        <p className={"me-[5px] font-semibold my-4"}>Check it out </p>
        <HiArrowNarrowRight />
      </div>
    </a>
  );
};
const Img = ({ title, link, hasLink }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <a href={hasLink ? link : ""} className={`${hasLink ? "cursor-pointer" : "cursor-default" } bg-black border-black md:border-r-[1px] 
    sm:border-r-[0px] border-b-[1px] min-[1155px]:w-1/4 
    lg:w-1/2 sm:w-full flex overflow-hidden lg:h-[400px] sm:h-[400px]`}>
      <img
        className="hover:opacity-[0.8]
      unselect object-cover w-full transition duration-500"
        src={`/assets/projects/${projectTitle}.png`}
        alt={projectTitle}
      />
    </a>
  );
};

function Projects() {
  return (
    <section id="projects" className="">
      {/* HEADINGS */}
      <div className="justify-center flex items-center h-[200px] bg-accent-color">
        <h3 className="text-4xl font-Syne font-extrabold text-center">
          Featured Projects
        </h3>
      </div>

      {/* PROJECTS */}
      <div className="flex flex-wrap justify-center border-black border-t-[1px] bg-white">
        <Project
          title="eHills Dynamic Auction Platform"
          desc="A client-server Java application that allows multiple users to bid, purchase and interact with items stored on a MongoDB database. The project contains three main components: the server backend, the client GUI (JavaFX), and the client backend."
          link=""
          hasLink={false}
        />
        <Img
          title="ehills project"
          link=""
          hasLink={false}
        />

        <Project
          title="LiteNote: Lightweight Notes Web Application"
          desc="Developed a full-stack CRUD web app using Python and Flask that allows users to easily create, edit, and store notes."
          link="https://litenotes-flask-web-app.onrender.com/"
          hasLink={true}
        />
        <Img title="notes app" link="https://litenotes-flask-web-app.onrender.com/" hasLink={true}/>

        <Project
          title="JustTheNews: Real-Time News Parser"
          desc="Developed a web app using Python and Flask that scrapes articles to display trending news in an UI built with Bootstrap."
          link="https://justthenews-flask-app.onrender.com/"
          hasLink={true}
        />
        <Img title="justthenews" link="https://justthenews-flask-app.onrender.com/" hasLink={true}/>

        <Project
          title="Manhattan NYC Folio"
          desc="My camera and Manhattan's touristy spots, bustling streets, and incredible architecture. Built with Python and Flask."
          link="https://nyc-gallery-app.onrender.com/"
          hasLink={true}
        />
        <Img title="nyc folio" link="https://nyc-gallery-app.onrender.com/" hasLink={true}/>
      </div>
    </section>
  );
}

export default Projects;
