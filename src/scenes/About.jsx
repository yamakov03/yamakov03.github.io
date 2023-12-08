import React, { useEffect } from "react";
import SkillsTicker from "../components/SkillsTicker";
import Resume from "../components/Resume";

const Job = ({ title, job, time, desc, skills }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mt-2">
        <p className="text-2xl">
          {title}
        </p>
        <div className="text-end">
          <p className="text-lg">{job}</p>
          <p className="w-full">{time}</p>
        </div>
      </div>

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
              I'm an ECE student at UT
              Austin, graduating with my BS in May of 2024. Right now, I'm
              a software engineer intern at HPE building important tools teams use every day. I'm interested
              in opportunities to learn and grow in my career! <br></br>
              <br></br>I like to approach complex problems by simplifying them. As
              Leonardo Da Vinci once said,{" "}
              <span className="highlight-yellow-primary">
                simplicity is the ultimate sophistication.
              </span>

            </p>

          </div>


        </div>
      </div>
      <div className="flex items-center max-[1024px]:w-1/2 sm:w-full justify-center border-black border-t-[1px] ">
        <div className="flex flex-col me-[2%] ms-[2%] px-8 py-10">
          <div className="">
            <div className="flex items-center align-middle">
              <span className="text-4xl text-left font-Syne font-extrabold items-left highlight-yellow-bg">
                Education
              </span>
            </div>
            <p className="w-full mt-4 mb-10">
              <div className="flex items-center justify-between mt-2 mb-4">
                  <p className="text-2xl">The University of Texas at Austin</p>


                <div className="text-end">
                  <p className="text-lg">May 2021 - May 2024</p>
                </div>
              </div>
              <p className="">Bachelor of Science in Electrical and Computer Engineering</p>

              <p className="w-full">
                <strong>Concentration: </strong>Software Engineering and Design
              </p>
              <p className="w-full">
                <strong>Cumulative GPA: </strong>3.65/4.00
              </p>
            </p>
          </div>
          <div className="mb-[20px] divide-y divide-black">
            <div className="flex items-center align-middle mb-6">
              <span className="text-4xl text-left font-Syne font-extrabold items-left highlight-yellow-bg">
                Work
              </span>
            </div>
            <Job
              title="Software Engineer Intern"
              job="Hewlett Packard Enterprise"
              time="May 2023 - Present"
              desc="Created a developer SDK, CLI, user dashboard, and working on data integrations for company-wide vulnerability tracker platform"
              skills="API/SDK development, React, Redux, SQL Server, Bash, Apache ECharts"
            />
            <Job
              title="AI/ML Engineer Intern"
              job="State Street Corporation"
              time="Jan 2023 - May 2023"
              desc="Developed an ML-based anomaly detection application that profiles data and flags anomalies in sensitive financial data"
              skills="SciPy, scikit-learn, pandas, NumPy, React, API development, Kafka, Docker, S3"
            />
            <Job
              title="Commercial Analyst Intern"
              job="Talen Energy"
              time="June 2022 - Aug 2022"
              desc="Designed, proposed, and implemented a new bitcoin miner automation tool that lowers energy usage by more than 15%"
              skills="C# .NET, Python, Azure SQL Server, large data processing, predictive modelling"
            />
            <Job
              title="Software Engineer Intern"
              job="Datos Technologies"
              time="Oct 2019 - Jan 2020"
              desc="Maintained a popular point-of-sale Android application that allows users to apply smart discounts to inventory"
              skills="Java, Git, Unit testing, Gradle, Android Studio"
            />
          </div>
          <Resume />
        </div>
        <img
          className="flex w-1/2 max-[1200px]:hidden lg:visible object-cover min-[1600px]:h-[1200px] h-[1500px] border-s-[1px] border-black unselect"
          alt="working"
          src="assets/work.jpg"
        />
      </div>
    </section>
  );
};

export default About;
