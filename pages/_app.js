import React, { useEffect } from 'react';
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { polyfill } from 'smoothscroll-polyfill';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    polyfill();
  }, []);
  return (
    <>
      <div className="font-primaryFont bg-gradient-to-b from-gray-50 to-gray-100 w-full h-full ">
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default MyApp;
