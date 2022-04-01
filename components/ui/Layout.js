import Footer from '../Footer/footer';
import React from 'react'
import Head from 'next/head';
import Navbar from '../Navbar/navbar'
const Layout = ({description, title, children}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
     
        <Navbar />
        {children}
        <Footer />
     
    </>
  );
}

export default Layout