import React from "react";
import MobileNavItem from "./mobile-nav-item";
import styles from "./mobile-nav.module.css";
import { Drawer } from "@mantine/core";
const MobileNav = ({ navLinks, isOpen, toggleMenu }) => {
  return (
    <Drawer opened={isOpen} onClose={toggleMenu} size="80%" style={{ paddingTop: "10px"}}>
      <div className="container">
        <ul
          className={`flex flex-1 flex-col text-center uppercase px-4 overflow-hidden ${styles["last-li"]}`}
        >
          {navLinks.map((link) => (
            <MobileNavItem toggleMenu={toggleMenu} key={link.text} href={link.href} external={link.external}>
              <div className="flex flex-1 justify-center items-center">
                {link.icon}
                {link.text}
              </div>
            </MobileNavItem>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default MobileNav;
