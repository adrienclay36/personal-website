import React from "react";
import ShowcaseItem from "../ShowcaseItems/showcase-item";
import Layout from "../ui/Layout";
import HomeHero from "./HomeHero";
const HomeSection = () => {
  return (
    <>
      <HomeHero />
      <ShowcaseItem />
      <ShowcaseItem />
    </>
  );
};

export default HomeSection;
