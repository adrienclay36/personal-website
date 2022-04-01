import React from 'react'

const ColorButton = ({ textColor, hoverColor, backgroundColor, icon, text, classes, onClick }) => {
  return (
    <div className="text-center lg:text-left md:text-center z-50">
      <button

        onClick={onClick}
        className={`${textColor} ${hoverColor} ${backgroundColor} rounded-full shadow-md px-8 py-4 flex flex-1 flex-row justify-center items-center ${classes ? classes : null}`}
      >
        {text}
        {icon ? icon : null}
      </button>
    </div>
  );
}

export default ColorButton