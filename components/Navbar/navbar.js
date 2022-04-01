import React, { useState } from "react";
import { Burger } from "@mantine/core";
import MobileNav from "./mobile-nav";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="container flex items-center py-4 mb-12">
        <ul className="hidden sm:flex flex-1 flex-wrap lg:flex-nowrap md:flex-wrap justify-center items-center gap-6 lg:gap-10 md:gap-6 uppercase text-sm mt-2 text-semibold overflow-hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <li
                tabIndex={0}
                className="mb-2 cursor-pointer tracking-widest hover:text-slate-200 text-center text-lg"
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex sm:hidden flex-1 justify-end mr-3">
          <Burger
            size={30}
            opened={isOpen}
            color="black"
            onClick={toggleMenu}
          />
        </div>
      </nav>
      <div className="sm:hidden md:block lg:block">
        <MobileNav
          isOpen={isOpen}
          navLinks={navLinks}
          //   navLinks={navLinks}
        />
      </div>
    </div>
  );
};

export default Navbar;

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "GitHub",
    href: "/github",
  },
];
