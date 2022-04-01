import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import MainButton from "../ui/main-button";
const HomeHero = () => {

    
  return (
    <div className="container flex flex-1 flex-col lg:flex-row md:flex-col justify-between items-center mb-64">
      {/* NAME/DESCRIPTION/BUTTON */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start md:items-center">
        <h1 className="text-5xl md:text-8xl lg:text-8xl font-semibold mb-8 text-center lg:text-left md:text-center">
          Adrien Clay
        </h1>
        <p className="text-lg lg:text-2xl md:text-2xl font-semibold mb-4 text-center lg:text-left md:text-center">
          Software Developer x Data Scientist
        </p>
        <p className="text-md lg:text-lg md:text-lg w-3/6 mb-8 text-center lg:text-left md:text-center">
          Developing scalable, intuitive interfaces and integrating machine
          learning into modern designs.
        </p>
        <MainButton text={"Browse Portfolio"} icon={<AiOutlineArrowDown className="ml-2" size={20} />} />
      </div>

      {/* IMAGE */}

      <div className="mt-12 lg:mt-0 md:mt-12">
        <Image src={"/hero.png"} height={366} width={321} alt="Hero 3D" />
      </div>
    </div>
  );
};

export default HomeHero;
