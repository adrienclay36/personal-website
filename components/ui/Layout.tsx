import Footer from '../Footer/footer';
import React from 'react'
import Head from 'next/head';
import Navbar from '../Navbar/navbar'

interface LayoutProps {
  description: string;
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ description, title, children }) => {
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