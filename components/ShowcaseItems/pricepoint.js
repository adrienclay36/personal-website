import React from "react";
import Link from "next/link";
import MainButton from "../ui/main-button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";
const PricePoint
 = () => {
  return (
    <Parallax speed={-10}>
      <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-24 w-11/12 lg:w-full md:w-11/12">
        <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
          <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
            <h1 className="text-3xl mb-2">asbury.mobile</h1>
            <p className="mb-4 text-gray-500">
              React Native &sdot; PostGreSQL &sdot; Supabase.io
            </p>
            <p className="font-semibold mb-4">
              ...And Extend that community on mobile
            </p>
            <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
              A seamless, functionality-first approach providing users with all
              the tools they need to stay connected, Asbury Mobile brings
              on-the-go life to the existing web platform.
            </p>
          </div>

          <div className="mr-0 lg:mr-8 md:mr-0">
            <img
              src={"/asbury-mobile.png"}
              height={1000}
              width={1000}
              alt="Asbury Web"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-start">
          <Link href="https://expo.dev/@adrienclay/asbury-mobile" passHref>
            <a rel="noreferrer" target="_blank">
              <MainButton
                classes="mt-4 -ml-1"
                inverted={true}
                text="View on Expo"
                icon={
                  <AiOutlineArrowRight size={20} className="text-white ml-4" />
                }
              />
            </a>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default PricePoint
;
