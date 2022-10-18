import React from "react";
import MainButton from "../ui/main-button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

import { ShowcaseProject } from '../../models/showcase-project';
interface ShowcaseProps {
  showcaseProject: ShowcaseProject;
}

const ShowcaseItem: React.FC<ShowcaseProps> = ({ showcaseProject }) => {
  const smallScreen = useMediaQuery("(max-width: 900px)");

  const production = "bg-teal-600 px-3 py-2 rounded-3xl";
  const portfolio = "bg-cyan-700 px-5 py-2 rounded-3xl";
  return (
    <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-12 w-11/12 lg:w-full md:w-11/12">
      <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
        <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-2">{showcaseProject.title}</h1>
          <p className="mb-4 text-gray-500">{showcaseProject.attributes}</p>
          <p className="font-semibold mb-4">{showcaseProject.tagline}</p>
          <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
            {showcaseProject.description}
          </p>
        </div>

        <div>
          <img
            src={showcaseProject.image}
            height={1000}
            width={1000}
            alt="Asbury Web"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-start">
        <Link href={showcaseProject.href} passHref>
          <a rel="noreferrer" target="_blank">
            <MainButton
              classes="mt-4 -ml-1"
              inverted={true}
              text={showcaseProject.buttonText}
              icon={
                <AiOutlineArrowRight size={20} className="text-white ml-4" />
              }
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end md:justify-center items-center mt-10 lg:mt-0 md:mt-6">
        <div className={`${showcaseProject.type === 'production' ? production : portfolio}`}>
          <p className="text-white text-center text-sm">
            {showcaseProject.type === "production" ? "Production" : "Portfolio"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
