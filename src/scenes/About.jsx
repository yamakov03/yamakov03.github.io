import React, { useEffect } from "react";
import SkillsTicker from "../components/SkillsTicker";
import Resume from "../components/Resume";

const Job = ({ title, job, time, desc, skills }) => {
  return (
    <div>
      <p className="text-2xl mt-6 w-full">
        {title} | {job}
      </p>
      <p className="w-full">{time}</p>
      <p className="w-full mt-1">{desc}</p>
      <p className="w-full mt-1">
        <strong>Leveraged </strong>
        {skills}
      </p>
    </div>
  );
};

const About = () => {

  return (
    <section id="about" className="border-b-[1px] border-black">
      {/* BOX SECTION */}
      <div
        className="flex w-full flex-wrap border-b-[0px] 
      border-black"
      >
        <img
          className="flex w-2/5 max-[1023px]:hidden lg:visible object-cover h-[920px] border-s-[1px] border-black unselect"
          alt="working"
          src="assets/about.jpg"
        />

        {/* MAIN TEXT */}
        <div
          className="relative w-full lg:w-3/5 sm:order-1 min-[1024px]:order-2 lg:border-l-[1px] md:border-l-[0px] border-black 
      bg-primary-color max-[1023px]:py-[70px] justify-center items-center flex flex-wrap px-5"
        >

          <h3 className="justify-center flex w-full text-4xl font-Syne font-extrabold text-black mb-10 lg:hidden sm:visible">
            About me.
          </h3>
          <div className="lg:w-[800px] xl:mx-8 mx-2 sm:w-[650px] min-[750px]:text-left sm:text-center w-full p-8 border-black border-[2px] mb-5  rounded-2xl group-hover:shadow-none transition shadow-[6px_6px_0_0_#000] bg-white">
            {/* HEADINGS */}
            <h3 className="justify-left flex w-full text-4xl font-Syne font-extrabold mb-10 text-black lg:visible max-[1023px]:hidden mt-10">
              About me.
            </h3>
            <span className="md:text-5xl sm:text-4xl font-Syne">
              A SWE longhorn from Austin, Texas 🤘
            </span>
            <p className="md:text-2xl sm:text-xl pt-4">
              Hey! I'm a electrical and computer engineering junior at UT
              Austin, working on an integrated BS/MS program. Right now, I'm
              working as a SWE Intern at HPE. <br></br>
              <br></br>I like to take complex problems and simplify them. As
              Leonardo Da Vinci once said,{" "}
              <span className="highlight-yellow-primary">
                simplicity is the ultimate sophistication.
              </span>

            </p>

          </div>


        </div>
      </div>
      <div className="flex items-center max-[1024px]:w-1/2 sm:w-full justify-center border-black border-t-[1px]">
        <div className="flex flex-col min-[1024px]:py-[0px] sm:py-[70px] min-[1024px]:px-[5%] sm:px-[15%] my-4">
          <div className="">
            <div className="flex items-center align-middle mb-6">
              <span className="text-4xl text-left font-Syne font-extrabold items-left highlight-yellow-bg me-6">
                Education
              </span>
            </div>
            <p className="w-full mt-4 mb-10">
              <p className="text-2xl w-full">
                The University of Texas at Austin
              </p>
              <p className="w-full">BS Electrical and Computer Engineering</p>
              <p className="w-full mb-4">
                MS Electrical and Computer Engineering
              </p>
              <p className="w-full">May 2021 - Present (Expected 2025)</p>
              <p className="w-full">
                <strong>Concentration: </strong>Software Engineering and Systems
                (SES)
              </p>
              <p className="w-full">
                <strong>Cumulative GPA: </strong>3.65/4.00
              </p>
            </p>
          </div>
          <div className="mb-[30px]">
            <div className="flex items-center align-middle mb-6">

              <span className="text-4xl text-left font-Syne font-extrabold items-left highlight-yellow-bg me-6">
                Work

              </span>
              
            </div>
            <Job
              title="Intern Software Engineer"
              job="Hewlett Packard Enterprise"
              time="May 2023 - Present"
              desc="In the works"
              skills="something"
            />
            <Job
              title="Intern AI/ML Engineer"
              job="State Street Corporation"
              time="Jan 2023 - May 2023"
              desc="Deployed a new anomaly detection service to production that leverages ML to detect fraudulent transactions."
              skills="React, Node.js, client-server architecture, REST APIs, UI/UX Testing"
            />
            <Job
              title="Intern Commercial Analyst"
              job="Talen Energy"
              time="June 2022 - Aug 2022"
              desc="Built and deployed a Bitcoin miner automation tool using live market data, improving profitability by 15%."
              skills="C# .NET, SQL, Azure SQL Server, REST APIs, Bitcoin P2P protocol"
            />
            <Job
              title="Intern Software Engineer"
              job="Datos Technologies"
              time="Oct 2019 - Jan 2020"
              desc="Maintained a popular point-of-sale Android application that provides data-driven pricing on client inventory."
              skills="Java, Git, JUnit testing, Gradle, Android Studio"
            />
          </div>
          <Resume />
        </div>
        <img
          className="flex w-1/2 max-[1023px]:hidden lg:visible object-cover min-[1590px]:h-[1200px] h-[1400px] border-s-[1px] border-black unselect"
          alt="working"
          src="assets/work.jpg"
        />
      </div>
    </section>
  );
};

export default About;
