import React from "react";
import AsburyChurch from "../ShowcaseItems/asbury-church";
import AsburyMobile from "../ShowcaseItems/asbury-mobile";
import PricePoint from "../ShowcaseItems/pricepoint";
import HomeHero from "./HomeHero";
import GoDash from "../ShowcaseItems/go-dash";
import ShowcaseItem from "../ShowcaseItems/ShowcaseItem";


const showcase = [
  {
    title: "asbury.church",
    attributes: "React.js ⋅ Next.js ⋅ PostGreSQL ⋅ Supabase.io",
    tagline: "Foster A Community Via The Web...",
    description:
      "A full blown social media experience in the fellowship space, allowing users to self-manage recurring donations and connect with each other through the web.",
    image: "/mac.png",
    href: "https://asbury-next-website.vercel.app/",
    type: "production",
    buttonText: 'Visit Asbury'
  },
  {
    title: "asbury.mobile",
    attributes: "React Native ⋅ PostGreSQL ⋅ Supabase.io",
    tagline: "...And Extend that community on mobile",
    description:
      "A seamless, functionality-first approach providing users with all the tools they need to stay connected. Asbury Mobile brings on-the-go life to the existing web platform.",
    href: "https://expo.dev/@adrienclay/asbury-mobile",
    type: "production",
    image: '/asbury-mobile.png',
    buttonText: 'View On Expo'
  },
  {
    title: "go.dash",
    attributes: "React Native ⋅ Firebase ⋅ Yelp API",
    tagline: "Local Restaurants and Grocers, One Touch Away",
    description:
      "A fully featured food delivery app in the image of Uber Eats, Doordash, PostMates and other popular services, this app provides cover to cover food ordering capabilities.",
    href: "https://expo.dev/@adrienclay/go-dash",
    type: 'portfolio',
    image: '/go-dash.png',
    buttonText: 'View On Expo'
  },
  {
    title: "pricepoint.",
    attributes: "React.js ⋅ Flask ⋅ XGBoost",
    tagline: "Find The Right Price",
    description:
      'Combining machine learning and a modern interface, PricePoint will help you find the right price for your vehicle utilizing the latest information. A "full-stack" machine learning app from data-scraping to full scale deployment.',
    href: "https://pricepoint-evaluator.netlify.app/",
    type: 'portfolio',
    image: '/pricepoint.png',
    buttonText: 'Visit PricePoint'
  },
];

const HomeSection = () => {
  return (
    <>
      <section id="heroSection">
        <HomeHero />
      </section>

      <section id="portfolio">
        {showcase.map((item, index) => (
          <ShowcaseItem key={index} {...item} />
        ))}
      </section>
    </>
  );
};

export default HomeSection;
