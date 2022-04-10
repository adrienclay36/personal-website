import React from "react";
import Link from "next/link";
import MainButton from "../ui/main-button";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useMediaQuery } from "@mantine/hooks";
const PricePoint = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");
 
  return (
    
      <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-12 w-11/12 lg:w-full md:w-11/12">
        <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
          <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
            <h1 className="text-3xl mb-2">pricepoint.</h1>
            <p className="mb-4 text-gray-500">
              React.js &sdot; Flask &sdot; XGBoost
            </p>
            <p className="font-semibold mb-4">Find The Right Price</p>
            <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
              Combining machine learning and a modern interface, PricePoint will
              help you find the right price for your vehicle utilizing the
              latest information. A &quot;full-stack&quot; machine learning app
              from data-scraping to full scale deployment.
            </p>
          </div>

          <div className="mr-0 lg:mr-8 md:mr-0 mb-6">
            <img
            
              src={"/pricepoint.png"}
              height={1000}
              width={1000}
              alt="Asbury Web"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-start">
          <Link href="https://pricepoint-evaluator.netlify.app/" passHref>
            <a rel="noreferrer" target="_blank">
              <MainButton
                classes="mt-4 -ml-1"
                inverted={true}
                text="Visit PricePoint"
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

export default PricePoint;
