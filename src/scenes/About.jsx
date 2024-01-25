import React, { useEffect } from "react";
import SkillsTicker from "../components/SkillsTicker";
import Resume from "../components/Resume";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Tag } from "../components/tag";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Job = ({ title, job, time, desc, skills }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mt-2 mb-3">
        <div className="text-start">
          <p className="text-2xl max-[1200px]:text-xl font-bold font-Syne me-4">{title}</p>
          <p className="w-full mt-1">{desc}</p>
          <p className="max-[800px]:visible min-[800px]:hidden">{job}</p>
          <p className="max-[800px]:visible min-[800px]:hidden">{time}</p>
        </div>
        <div className="text-end max-[800px]:hidden min-[800px]:visible">
          <p>{job}</p>
          <p className="w-full">{time}</p>
        </div>
      </div>
      <div className="group inline-flex flex-wrap items-center gap-2 mt-1">
        {skills.map((item, index) => (
          <Tag key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

const About = ({ setPage }) => {

  return (
    <section id="about" className="border-b-[1px] border-black flex">
      <div className="flex items-center max-[1024px]:w-[60%] sm:w-full justify-center border-black">
        <div className="flex flex-col px-6 max-[1200px]:pt-16 max-[1200px]:pb-5">
          <div className="flex flex-row justify-between items-center align-middle max-[1200px]:gap-2 ms-2">
            <Header text="About me." />
            <Resume />
          </div>
          <div className="divide-y mt-10 min-[1200px]:mb-10 mb-5  divide-black">
            <SubHeader text="Eductation" />
            <div className="flex items-center justify-between mt-2 mb-2">
              <div className="text-start mt-2">
                <p className="text-2xl max-[1200px]:text-xl font-bold font-Syne me-4">The University of Texas at Austin</p>
                <p className="w-full mt-1">Bachelor of Science in Electrical and Computer Engineering</p>
                <p className="w-full">
                  <strong>Cumulative GPA: </strong>3.72/4.00
                </p>
                <p className="max-[800px]:visible min-[800px]:hidden">May 2021 - May 2024</p>
              </div>
              <div className="text-end max-[800px]:hidden min-[800px]:visible">
                <p className="w-full">May 2021 - May 2024</p>
              </div>
            </div>
          </div>

          <div className="mb-[20px] divide-y divide-black">
            <SubHeader text="Experience" />
            <Job
              title="Software Engineer Intern"
              job="Hewlett Packard Enterprise"
              time="May 2023 - Jan 2024"
              desc="Product security"
              skills={['API/SDK development', 'React', 'Redux', 'SQL Server', 'Bash', 'Apache ECharts']}
            />
            <Job
              title="AI/ML Engineer Intern"
              job="State Street Bank"
              time="Jan 2023 - May 2023"
              desc="Anomaly detection and predictive modelling"
              skills={['SciPy', 'scikit-learn', 'pandas', 'NumPy', 'React', 'API development', 'Kafka', 'Docker', 'S3']}
            />
            <Job
              title="Commercial Analyst Intern"
              job="Talen Energy"
              time="June 2022 - Aug 2022"
              desc="Bitcoin mining strategy"
              skills={['C# .NET', 'Python', 'Azure SQL Server', 'large data processing', 'predictive modelling']}
            />
            <Job
              title="Software Engineer Intern"
              job="Datos Technologies"
              time="Oct 2019 - Jan 2020"
              desc="POS android app development"
              skills={['Java', 'Git', 'Unit testing', 'Gradle', 'Android Studio']}
            />
          </div>
          <div>
            <AnchorLink
              offset='55'
              className="hover:text-secondary-color transition-all"
              href={`#projects`}
              onClick={() => setPage('projects')}
            >
              <SubHeader text="projects 👇" />
            </AnchorLink>
            
          </div>
        </div>

      </div>
      <img
        className="flex w-[50%] max-[1200px]:hidden min-[1200px]:visible object-cover min-[1600px]:h-[1200px] h-[1300px] border-s-[1px] border-black unselect"
        alt="working"
        src="assets/work.jpg"
      />
    </section>
  );
};

export default About;
