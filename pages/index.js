import Head from "next/head";
import React from "react";
import HomeSection from "../components/Home/HomeSection";
import Layout from "../components/ui/Layout";
export default function Home({ description, title }) {
  return (
    <Layout
      title="Adrien Clay"
      description="Welcome to my offical portfolio website. Get in touch with me today to talk opportunities!"
    >
      <div>
        <HomeSection />
      </div>
    </Layout>
  );
}
