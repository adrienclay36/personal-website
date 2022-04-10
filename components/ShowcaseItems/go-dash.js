import React from "react";
import Link from "next/link";
import MainButton from "../ui/main-button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
const GoDash = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-12 w-11/12 lg:w-full md:w-11/12">
      <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
        <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-2">go.dash</h1>
          <p className="mb-4 text-gray-500">
            React Native &sdot; Firebase &sdot; Yelp API
          </p>
          <p className="font-semibold mb-4">
            Local Restaurants and Grocers, One Touch Away
          </p>
          <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
            A fully featured food delivery app in the image of Uber Eats,
            Doordash, PostMates and other popular services, this app provides
            cover to cover food ordering capabilities.
          </p>
        </div>

        <div className="mr-0 lg:mr-8 md:mr-0 mb-6">
          <img
            src={"/go-dash.png"}
            height={1000}
            width={1000}
            alt="Asbury Web"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-start">
        <Link href="https://expo.dev/@adrienclay/go-dash" passHref>
          <a rel="noreferrer" target="_blank">
            <MainButton
              classes="mt-4 -ml-1"
              inverted={true}
              text="View On Expo"
              icon={
                <AiOutlineArrowRight size={20} className="text-white ml-4" />
              }
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GoDash;
