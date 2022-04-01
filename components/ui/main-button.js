import React from 'react'

const MainButton = ({ inverted, icon, text, classes }) => {
  return (
    <div className="text-center lg:text-left md:text-center">
      <button
        className={`${inverted ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} rounded-full shadow-md px-8 py-4 flex flex-1 flex-row justify-center items-center ${classes ? classes : null}`}
      >
        {text}
        {icon ? icon : null}
      </button>
    </div>
  );
}

export default MainButton