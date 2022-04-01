import React from 'react'
import Image from 'next/image';
import MainButton from '../ui/main-button';
import { AiOutlineArrowRight } from 'react-icons/ai';
const ShowcaseItem = () => {
  return (
    <div className="container bg-white rounded-lg shadow-lg shadow-gray-300 p-10 mb-12 w-11/12 lg:w-full md:w-11/12">
      <div className="flex flex-1 flex-col lg:flex-row md:flex-col justify-center lg:justify-between md:justify-center items-center">
        <div className="text-center lg:text-left md:text-center flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-2">asbury.church</h1>
          <p className="mb-4 text-gray-500">
            React.js &sdot; Next.js &sdot; PostGreSQL &sdot; Supabase.io
          </p>
          <p className="font-semibold mb-4">Foster A Community Via The Web</p>
          <p className="text-grey-500 w-10/12 mb-8 lg:mb-2 md:mb-4">
            A full blown social media experience in the fellowship space, allowing users to self-manage
            recurring donations and connect with each other through the web.
          </p>
        </div>

        <div>
          <Image
            src={"/asbury-web.png"}
            height={565}
            width={1300}
            alt="Asbury Web"
            className="rounded-lg"
          />
        </div>

      </div>
      
      <div className="flex flex-1 justify-start">

        <MainButton classes="mt-4 -ml-1" inverted={true} text="Visit" icon={<AiOutlineArrowRight size={20} className="text-white ml-4" />} />
      </div>
      
    </div>
  );
}

export default ShowcaseItem