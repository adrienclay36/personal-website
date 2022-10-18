import React from 'react'

interface MainButtonProps {
  inverted?: boolean;
  icon?: JSX.Element;
  text?: string;
  classes?: string;
  onClick?: React.MouseEvent<HTMLButtonElement>;
}

const MainButton = ({ inverted, icon, text, classes, onClick = () => {} }) => {
  return (
    <div className="text-center lg:text-left md:text-center">
      <button
        onClick={onClick}
        className={`${inverted ? 'bg-black text-white lg:hover:bg-gray-800' : 'bg-white text-black lg:hover:bg-gray-100'} rounded-full shadow-md px-8 py-4 flex flex-1 flex-row justify-center items-center ${classes ? classes : null}`}
      >
        {text}
        {icon ? icon : null}
      </button>
    </div>
  );
}

export default MainButton