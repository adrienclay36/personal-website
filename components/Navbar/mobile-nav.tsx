import React from "react";
import MobileNavItem from "./mobile-nav-item";
import styles from "./mobile-nav.module.css";
import { Drawer } from "@mantine/core";
import { NavLinks } from '../../models/nav-links';
interface MobileNavProps {
  navLinks: NavLinks[];
  isOpen: boolean;
  toggleMenu: () => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ navLinks, isOpen, toggleMenu, setOpenModal }) => {
  return (
    <Drawer
      transitionDuration={500}
      trapFocus={false}
      position="right"
      opened={isOpen}
      onClose={toggleMenu}
    >
      <ul
        className={`flex flex-1 flex-col text-center px-4 overflow-hidden ${styles["last-li"]}`}
      >
        {navLinks.map((link) => (
          <MobileNavItem
            toggleMenu={toggleMenu}
            key={link.text}
            href={link.href}
            contactButton={link.contactButton}
            external={link.external}
            setOpenModal={setOpenModal}
          >
            <div className="flex flex-1 justify-center items-center">
              {link.icon}
              {link.text}
            </div>
          </MobileNavItem>
        ))}
      </ul>
    </Drawer>
  );
};

export default MobileNav;
