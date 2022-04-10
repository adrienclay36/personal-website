import React from "react";
import MainButton from "../ui/main-button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
const ShowcaseItem = ({
  title,
  tagline,
  description,
  attributes,
  type,
  image,
  href,
  buttonText,
}) => {
  const smallScreen = useMediaQuery("(max-width: 900px)");

  const production = "bg-teal-600 px-3 py-2 rounded-3xl";
  const portfolio = "bg-cyan-700 px-5 py-2 rounded-3xl";
  return (
    <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-12 w-11/12 lg:w-full md:w-11/12">
      <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
        <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-2">{title}</h1>
          <p className="mb-4 text-gray-500">{attributes}</p>
          <p className="font-semibold mb-4">{tagline}</p>
          <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
            {description}
          </p>
        </div>

        <div>
          <img
            src={image}
            height={1000}
            width={1000}
            alt="Asbury Web"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-start">
        <Link href={href} passHref>
          <a rel="noreferrer" target="_blank">
            <MainButton
              classes="mt-4 -ml-1"
              inverted={true}
              text={buttonText}
              icon={
                <AiOutlineArrowRight size={20} className="text-white ml-4" />
              }
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <div className={`${type === 'production' ? production : portfolio}`}>
          <p className="text-white text-center text-sm">
            {type === "production" ? "Production" : "Portfolio"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
