import React from "react";
import { useRouter } from "next/router";
const MobileNavItem = (props) => {
  const router = useRouter();

  if (props?.contactButton) {
    return (
      <>
        <button
          onClick={() => {
            props.toggleMenu();
            props.setOpenModal(true);
          }}
        >
          <li className={`my-4 font-light tracking-widest`}>
            {props.children}
          </li>
        </button>
        <hr className="border-b" />
      </>
    );
  }
  if (props.external) {
    return (
      <>
        <a href={props.href} rel="noreferrer" target="_blank">
          <li className={`my-4 font-light tracking-widest`}>
            {props.children}
          </li>
        </a>

        <hr className="border-b" />
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => {
          props.toggleMenu();
          router.push(props.href);
        }}
      >
        <li className={`my-4 font-light tracking-widest`}>{props.children}</li>
      </button>
      <hr className="border-b" />
    </>
  );
};

export default MobileNavItem;
