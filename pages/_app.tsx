import React, { useEffect } from "react";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { polyfill } from "smoothscroll-polyfill";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    polyfill();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <MantineProvider>
        <NotificationsProvider position="top-right">
          <div className="font-primaryFont bg-gradient-to-b from-gray-50 to-gray-100 w-full h-full ">
            <ParallaxProvider>
              <NextNProgress color="#000000" />
              <Component {...pageProps} />
            </ParallaxProvider>
          </div>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
