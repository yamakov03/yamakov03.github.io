import React, { useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SkillsTicker from "../components/SkillsTicker";
import Resume from "../components/Resume";

const Job = ({ title, job, time, desc, skills }) => {
  return (
    <div>
      <p className="text-2xl mt-[30px] w-full">
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
  useEffect(() => {
    const degreeToRadian = (angle) => {
      return angle * (Math.PI / 180);
    };

    const radius = 110;
    const diameter = radius * 2;

    const circle = document.querySelector("#circle");
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const text = circle.dataset.text;
    const characters = text.split("");

    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
      const span = document.createElement("span");
      span.innerText = character;
      const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
      const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

      const transform = `translate(${xPos}px, ${yPos}px)`;
      const rotate = `rotate(${index * deltaAngle + characterOffsetAngle}deg)`;
      span.style.transform = `${transform} ${rotate}`;

      currentAngle += deltaAngle;
      circle.appendChild(span);
    });
  });

  return (
    <section
      id="about"
      className="border-b-[1px] 
    border-black"
    >
      {/* BOX SECTION */}
      <div
        className="flex w-full flex-wrap border-b-[1px] 
      border-black"
      >
        <div
          className="w-full lg:w-2/5 
      min-[1024px]:order-1 sm:order-2 
      lg:bg-secondary-color
      sm:bg-primary-color flex flex-wrap"
        >
          <div className="flex justify-center items-center basis-full">
            <div
              className="group 
            relative 
            block 
            min-[1024px]:w-[70%]
            sm:w-[70%]
            md:h-[350px]
            sm:h-[375px]
            sm:mt-10
            min-[1024px]:mt-[100px]    
            "
            >
              <span className="absolute inset-0 bg-black rounded-xl"></span>
              <div
                className=" flex h-full 
            transform items-end 
            bg-accent-color
            
            rounded-xl  transition hover:shadow-none
            group-hover:-translate-x-2 group-hover:-translate-y-2 
            border-2 border-black"
              >
                <div className="transition-opacity group-hover:absolute group-hover:opacity-0 p-8">
                  <p className="text-5xl">
                    <BiWorld />
                  </p>

                  <h2 className="mt-4 text-4xl font-medium ">What drives me</h2>
                </div>

                <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-8 ">
                  <h3 className="mt-4 text-2xl font-medium">Make an Impact</h3>

                  <p className="mt-4 text-lg ">
                    This world is filled with complex problems. I am motivated
                    to be a <span className="font-bold"> force for good</span>.
                    I'm excited to keep learning and create positive change, day
                    by day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-full items-end justify-end z-30 text-[300px] lg:text-primary-color sm:text-secondary-color ">
            <MdKeyboardDoubleArrowRight />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div
          className="w-full lg:w-3/5 sm:order-1 min-[1024px]:order-2 lg:border-l-[1px] md:border-l-[0px] border-black 
      lg:bg-primary-color
      sm:bg-primary-color max-[1401px]:pt-[100px] justify-center items-center flex flex-wrap px-5"
        >
          <h3 className="justify-center flex w-full text-4xl font-Syne font-extrabold text-black mb-10 lg:hidden sm:visible">
            About me.
          </h3>
          <div
            className="
        lg:w-[500px]
        sm:w-[450px]
        min-[750px]:text-left
        sm:text-center
        w-full
        px-4
        "
          >
            {/* HEADINGS */}
            <h3 className="justify-left flex w-full text-4xl font-Syne font-extrabold mb-10 text-black lg:visible max-[1024px]:hidden">
              About me.
            </h3>
            <p className="md:text-5xl sm:text-4xl font-Syne mb-10">
              A SWE longhorn from Austin, Texas 🤘
            </p>
            <p className="md:text-2xl sm:text-xl">
              I'm a electrical and computer engineering junior at UT Austin. I'm
              also working as a SWE Intern at Hewlett Packard Enterprise.{" "}
              <br></br>
              <br></br>I like to take complex problems and simplify them. As
              Leonardo Da Vinci once said,{" "}
              <strong>simplicity is the ultimate sophistication.</strong>
            </p>
          </div>

          <div className="flex justify-center align-center content-center lg:mx-10 sm:mx-5 unselect group">
            <div
              id="circle"
              className="text-[25px] z-20 font-mono my-10"
              data-text="10X DEV 10X DEV 10X DEV 10X DEV&nbsp;"
            ></div>
            <p className="absolute z-20 text-[90px] pt-[80px]">👨🏻‍💻</p>
            <div className="absolute z-10 w-[230px] h-[230px] mt-[35px] bg-accent-color rounded-full border-black border-[2px] group-hover:shadow-none transition shadow-[6px_6px_0_0_#000] "></div>
          </div>
        </div>
      </div>

      <div className="flex items-center max-[1024px]:w-1/2 sm:w-full justify-center">
        <div className="flex flex-col min-[1024px]:py-[0px] sm:py-[70px] min-[1024px]:px-[5%] sm:px-[15%] ">
          <div className="">
            <h3 className="text-4xl text-left font-Syne font-extrabold mb-[40px] items-left">
              Education
            </h3>
            <p className="w-full">
              <p className="text-2xl w-full">The University of Texas at Austin</p>
              BS, MS Electrical and Computer Engineering<br></br>
              May 2021 - Present (Expected 2025)<br></br>
              <br></br>
              <strong>Concentration: </strong>Software Engineering and Systems
              <br></br>
              <strong>Cumulative GPA: </strong>3.65/4.00
            </p>
          </div>
          <div className="mb-[40px]">
            <h3 className="text-4xl mt-[50px] text-left font-Syne font-extrabold mb-5 items-left">
              Work
            </h3>
            <Job
              title="Intern Software Engineer"
              job="Hewlett Packard Enterprise"
              time="May 2023 - Present"
              desc="
"
              skills="something"
            />
            <Job
              title="Intern AI/ML Intern"
              job="State Street Corporation"
              time="Jan 2023 - Present"
              desc="Building machine learning models to detect anomalies in sensitive financial information using Sklearn.
"
              skills="React.js, REST APIs, server-side integration, ML anomaly detection, UI/UX testing"
            />
            <Job
              title="Intern Commercial Analyst"
              job="Talen Energy"
              time="June 2022 - Aug 2022"
              desc="Built and deployed a Bitcoin miner automation tool with live queries, improving fleet efficiency by 15%."
              skills="C# .NET, SQL, Azure SQL Server, Bitcoin P2P protocol, algorithmic trading"
            />
            <Job
              title="Intern Software Engineer"
              job="Datos Technologies"
              time="Oct 2019 - Jan 2020"
              desc="Maintained popular point-of-sale Android application that allows users to apply smart discounts to inventory"
              skills="Java, Git, JUnit testing, Gradle, Android Studio"
            />
          </div>
          <Resume />
        </div>

        {/* MAP */}
        <img
          className="flex w-1/2 max-[1023px]:hidden lg:visible object-cover h-[1360px] border-s-[1px] border-black unselect"
          alt="working"
          src="assets/work.jpg"
        />
      </div>
      <SkillsTicker />
    </section>
  );
};

export default About;
