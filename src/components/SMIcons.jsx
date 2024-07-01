import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex md:justify-start gap-7  ">
      <a href="https://github.com/yamakov03" role="button">
        <AiFillGithub className="text-5xl text__shadow" />
      </a>
      <a href="https://www.linkedin.com/in/danielyamakov/" role="button">
        <AiFillLinkedin className="text-5xl text__shadow" />
      </a>
      <a href="https://www.instagram.com/danielyamakov/" role="button">
        <AiOutlineInstagram className="text-5xl text__shadow" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;