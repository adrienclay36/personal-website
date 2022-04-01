import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="container">
      <p className="text-2xl font-semibold mb-4 text-center lg:text-left md:text-center">
        Adrien Clay x Albuquerque, NM
      </p>
      <div className="flex flex-row justify-center lg:justify-start md:justify-center items-center">
        <AiFillLinkedin size={25} className="mr-4 text-gray-600 cursor-pointer" />
        <BsGithub size={25} className="mr-4 text-gray-600 cursor-pointer" />
        <FaEnvelope size={25} className="mr-4 text-gray-600 cursor-pointer" />
      </div>
      <div className="h-20" />
    </div>
  );
}

export default Footer