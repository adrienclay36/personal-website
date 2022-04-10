import React from "react";
import AsburyChurch from "../ShowcaseItems/asbury-church";
import AsburyMobile from "../ShowcaseItems/asbury-mobile";
import PricePoint from "../ShowcaseItems/pricepoint";
import HomeHero from "./HomeHero";
import GoDash from "../ShowcaseItems/go-dash";
const HomeSection = () => {
  return (
    <>
      <section id="heroSection">
        <HomeHero />
      </section>

      <section id="portfolio">
        <AsburyChurch />
        <AsburyMobile />
        <GoDash/>
        <PricePoint/>
      </section>
    </>
  );
};

export default HomeSection;
