import React from "react";
import Layout from "../components/ui/Layout";
import ColorButton from "../components/ui/color-button";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "@mantine/hooks";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";
import { NextPage } from "next";
const imageSize = {
  largeWidth: 456,
  largeHeight: 600,
  smallWidth: 228,
  smallHeight: 300,
};
const CustomErrorPage: NextPage = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");
  const router = useRouter();
  return (
    <Layout
      title="Error"
      description="I don't think this is where you meant to land..."
    >
      <div
        className={`container flex flex-1 flex-col lg:flex-row md:flex-col justify-between items-center mb-28 lg:mb-64 md:mb-64`}
      >
        {/* NAME/DESCRIPTION/BUTTON */}
        <div className="flex flex-1 flex-col justify-center items-center lg:items-start md:items-center">
          <h1
            className={`text-5xl md:text-8xl lg:text-8xl font-semibold mb-8 text-center lg:text-left md:text-center`}
          >
            404 Error
          </h1>
          <p className="text-lg lg:text-2xl md:text-2xl font-semibold mb-4 text-center lg:text-left md:text-center">
            (that&apos;s a you problem)
          </p>
          <p className="text-md lg:text-lg md:text-lg w-3/6 mb-8 text-center lg:text-left md:text-center">
            Things happen though. Let&apos;s get you back to safety.
          </p>
          <div className="z-50 flex flex-1 flex-row justify-center items-center">
            <ColorButton
              onClick={() => router.push("/")}
              backgroundColor={"bg-blue-500"}
              textColor="text-white"
              hoverColor="lg:hover:bg-blue-600 hover:none md:hover:none"
              icon={<AiOutlineHome size={20} className="text-white ml-2" />}
              text={"Home"}
            />
          </div>
        </div>

        {/* IMAGE */}
        <div>
          <div className={`mt-24 lg:mt-0 md:mt-20 -z-50`}>
            <Tilt>
              <img
                className="-z-50"
                loading="eager"
                src={"/lightbulb.png"}
                height={
                  smallScreen ? imageSize.smallHeight : imageSize.largeHeight
                }
                width={
                  smallScreen ? imageSize.smallWidth : imageSize.largeWidth
                }
                alt="Lightbulb"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomErrorPage;
