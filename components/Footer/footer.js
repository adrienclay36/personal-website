import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container">
      <p className="text-2xl mb-4 text-center lg:text-left md:text-center">
        Adrien Clay &sdot; Albuquerque, NM
      </p>
      <div className="flex flex-row justify-center lg:justify-start md:justify-center items-center">
        <a
          href="https://www.linkedin.com/in/adrienclaynm/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin
            size={25}
            className="mr-4 text-gray-600 cursor-pointer"
          />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/adrienclay36?tab=repositories"
          target="_blank"
        >
          <BsGithub size={25} className="mr-4 text-gray-600 cursor-pointer" />
        </a>
        <a
          href="mailto:adrienclay36@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope size={25} className="mr-4 text-gray-600 cursor-pointer" />
        </a>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default Footer;
