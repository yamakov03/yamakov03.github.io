import React, { useEffect } from "react";
import SkillsTicker from "../components/SkillsTicker";
import Resume from "../components/Resume";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Tag } from "../components/tag";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Timeline } from "../components/Timeline";

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
      <div className="inline-flex flex-wrap items-center gap-2 mt-1 group ">
        {skills.map((item, index) => (
          <Tag key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

const About = () => {

  return (
    <section id="about" className="border-b-[1px] border-black bg-base-200 flex align-middle items-center justify-center flex-col">
      <div className="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]">


        <div class="mb-5">
          <Header text="About me" />
        </div>

        <div class="mb-10 text-justify">
          I'm a <b>software engineer at SpaceX</b> currently building solutions to accelerate Starship manufacturing. I'm also working on my <b>Masters in Computer Science</b> online at Georgia Institute of Technology. I got my <b>BS in Electrical and Computer Engineering</b> at The University of Texas at Austin. I love learning and I'm excited to build creative solutions to tough problems.
        </div>

        <div class="mb-5">
          <div class="text-3xl w-full font-bold text-primary font-Syne">Education</div>
        </div>

        <div class="time-line-container grid gap-4 mb-10">
          <Timeline
            title="MS Computer Science"
            subtitle="2024 - Present | Georgia Institute of Technology"
          />
          <Timeline
            title="BS Electrical and Computer Engineering"
            subtitle="2021 - 2024 | The University of Texas at Austin"
          />
        </div>

        <div class="mb-5">
          <div class="text-3xl w-full font-bold text-primary font-Syne">Experience</div>
        </div>

        <div class="time-line-container mb-10">
          <Timeline
            title="Software Engineer at SpaceX"
            subtitle="Jul 2024 - Present | Starbase, Texas"
            desc="Starship Manufacturing"
          />
          <Timeline
            title="Software Engineer Intern at Hewlett Packard Enterprise"
            subtitle="May 2023 - Jan 2024 | Houston, Texas"
            desc="Worked with the product security team to build new tools and services that improve how HPE tracks, assesses, and resolves open-source software vulnerabilities"
          />
          <Timeline
            title="AI/ML Engineer Intern at State Street"
            subtitle="Jan 2023 - May 2023 | Austin, Texas"
            desc="Spearheaded the design and implementation of a new anomaly detection service used company-wide and integrated it with existing services"
          />
          <Timeline
            title="Commercial Analyst Intern (Crypto) at Talen Energy"
            subtitle="Jun 2022 - Aug 2022 | Houston, Texas"
            desc="Built tools to assess and optimize Talen's bitcoin mining strategy that led to critical bug resolution and performance improvements"
          />
        </div>

        {/* <div class="mb-5">
          <div class="text-3xl w-full font-bold text-primary font-Syne">Certifications</div>
        </div>

        <ul class="list-disc mx-6 mb-10 grid gap-2">
          <li>
            <a href="#" target="_blank"> Certification Name (with link)</a>
          </li>
          <li>
            <a href="#" target="_blank"> Certification Name (with link)</a>
          </li>
        </ul> */}

        <div class="mb-5">
          <div class="text-3xl w-full font-bold text-primary font-Syne">Skills</div>
        </div>

        <p className="text-xl text-bold font-Syne text-secondary">Frontend</p>
        <ul class="list-disc lg:columns-5 columns-2 mx-6">
          <li>React</li>
          <li>Angular</li>
          <li>Next.js</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
        </ul>
        <p className="text-xl text-bold font-Syne text-secondary">Backend</p>
        <ul class="list-disc lg:columns-5 columns-2 mx-6">
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Flask</li>
        </ul>
        <p className="text-xl text-bold font-Syne text-secondary">Database/Cloud</p>
        <ul class="list-disc lg:columns-5 columns-2 mx-6">
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>GCP/Firebase</li>
          <li>AWS</li>
        </ul>
        <p className="text-xl text-bold font-Syne text-secondary">Tools</p>
        <ul class="list-disc lg:columns-5 columns-2 mx-6">
          <li>Git</li>
          <li>GitHub</li>
          <li>Docker</li>
          <li>Postman</li>
          <li>Kafka</li>
          <li>JUnit</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
