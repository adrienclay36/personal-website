import React from "react";
import AsburyChurch from "../ShowcaseItems/asbury-church";
import AsburyMobile from "../ShowcaseItems/asbury-mobile";
import HomeHero from "./HomeHero";
const HomeSection = () => {
  return (
    <>
      <section id="heroSection">
        <HomeHero />
      </section>

      <section id="portfolio">
        <AsburyChurch />
        <AsburyMobile />
      </section>
    </>
  );
};

export default HomeSection;
