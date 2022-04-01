import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const MobileNavItem = (props) => {
  const router = useRouter();
  if (props.external) {
    <>
      <Link href={props.href} passHref>
        <a rel="noreferrer" target="_blank">
          <li className={`my-4 font-light tracking-widest`}>
            {props.children}
          </li>
        </a>
      </Link>
      <hr className="border-b" />
    </>;
  }
  return (
    <>
      <button onClick={() => {
        props.toggleMenu();
        router.push(props.href);
      }}>
        <li className={`my-4 font-light tracking-widest`}>{props.children}</li>
      </button>
      <hr className="border-b" />
    </>
  );
};

export default MobileNavItem;
