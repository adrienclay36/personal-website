import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import MainButton from "../ui/main-button";
import ColorButton from "../ui/color-button";
import { useMediaQuery } from "@mantine/hooks";
import { useParallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import styles from "./HomeHero.module.css";
const imageSize = {
  largeWidth: 456,
  largeHeight: 600,
  smallWidth: 228,
  smallHeight: 300,
};

const HomeHero = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");
  const parallax = useParallax<HTMLElement>({ speed: smallScreen ? 0 : -15 });
  return (
    <div
      className={`container flex flex-1 flex-col lg:flex-row md:flex-col justify-between items-center mb-28 lg:mb-64 md:mb-64`}
    >
      {/* NAME/DESCRIPTION/BUTTON */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start md:items-center">
        <h1
          className={`text-5xl md:text-8xl lg:text-8xl font-semibold mb-8 text-center lg:text-left md:text-center`}
        >
          Adrien Clay
        </h1>
        <p className="text-lg lg:text-2xl md:text-2xl font-semibold mb-4 text-center lg:text-left md:text-center">
          Software Developer x Data Scientist
        </p>
        <p className="text-md lg:text-lg md:text-lg w-3/6 mb-8 text-center lg:text-left md:text-center">
          Developing scalable, intuitive interfaces and integrating machine
          learning into modern designs.
        </p>
        <div className="z-50 flex flex-1 flex-row justify-center items-center">
          <ColorButton
            backgroundColor={"bg-blue-500"}
            textColor="text-white"
            hoverColor="lg:hover:bg-blue-600 hover:none md:hover:none"
            onClick={() => {
              document
                .getElementById("portfolio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            text={"Browse Portfolio"}
            icon={<AiOutlineArrowDown className="ml-2" size={20} />}
          />
        </div>
      </div>

      {/* IMAGE */}
      <div ref={parallax.ref as any}>
        <div className={`mt-24 lg:mt-0 md:mt-20 ${styles.animation} -z-50`}>
          <Tilt>
            <img
              
              className="-z-50"
              loading="eager"
              src={"/lightbulb.png"}
              height={
                smallScreen ? imageSize.smallHeight : imageSize.largeHeight
              }
              width={smallScreen ? imageSize.smallWidth : imageSize.largeWidth}
              alt="Lightbulb"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
