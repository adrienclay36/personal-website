import React, { useState } from "react";
import { Modal, TextInput, Textarea, Button } from "@mantine/core";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { showNotification } from "@mantine/notifications";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import emailjs, { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID);
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    email: "",
    message: "",
    name: "",
    emailIsValid: true,
    messageIsValid: true,
    nameIsValid: true,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const emailChangeHandler = (text) => {
    if (text.trim().length > 4) {
      setContactData({
        ...contactData,
        email: text,
        emailIsValid: true,
      });
    } else {
      setContactData({
        ...contactData,
        email: text,
        emailIsValid: false,
      });
    }
  };
  const messageChangeHandler = (text) => {
    if (text.trim().length > 0) {
      setContactData({
        ...contactData,
        message: text,
        messageIsValid: true,
      });
    } else {
      setContactData({
        ...contactData,
        message: text,
        messageIsValid: false,
      });
    }
  };

  const nameChangeHandler = (text) => {
    if (text.trim().length > 0) {
      setContactData({
        ...contactData,
        name: text,
        nameIsValid: true,
      });
    } else {
      setContactData({
        ...contactData,
        name: text,
        nameIsValid: false,
      });
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      contactData.email &&
      contactData.message &&
      contactData.emailIsValid &&
      contactData.messageIsValid &&
      contactData.name &&
      contactData.nameIsValid
    ) {
      const templateParams = {
        from_name: contactData.name,
        from_email: contactData.email,
        message: contactData.message,
      };

      try {
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMP_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );
        if (response.status === 200) {
          closeAndClear();
          showNotification({
            id: "success",
            autoClose: 10000,
            title: "Email Sent",
            message: "I will be in touch ASAP!",
            color: "green",
          });
        } else {
          closeAndClear();
          showNotification({
            id: "error",
            autoClose: 10000,
            title: "Error",
            message:
              "Something went wrong, please email me directly at adrienclay36@gmail.com",
            color: "red",
          });
        }

        setLoading(false);
      } catch (err) {
        closeAndClear();
        setLoading(false);
        showNotification({
          id: "error",
          autoClose: 10000,
          title: "Error",
          message:
            "Something went wrong, please email me directly at adrienclay36@gmail.com",
          color: "red",
        });
      }
    }
    setLoading(false);
  };

  const closeAndClear = () => {
    setOpenModal(false);
    setContactData({
      ...contactData,
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      {/* CONTACT FORM */}
      <Modal
        trapFocus={false}
        centered
        opened={openModal}
        onClose={closeAndClear}
        title="Get In Touch"
        styles={{ title: { fontWeight: 600 } }}
      >
        <form onSubmit={sendMessage}>
          <TextInput
            disabled={loading}
            className="mb-2"
            label="Name"
            required
            type="text"
            value={contactData.name}
            onChange={(e) => nameChangeHandler(e.target.value)}
          />
          <TextInput
            disabled={loading}
            className="mb-2"
            label="E-Mail"
            required
            type="email"
            value={contactData.email}
            onChange={(e) => emailChangeHandler(e.target.value)}
          />
          <Textarea
            disabled={loading}
            className="mb-4"
            label="Message"
            required
            rows={15}
            value={contactData.message}
            onChange={(e) => messageChangeHandler(e.target.value)}
          />
          <div className="text-center">
            <Button
              loading={loading}
              disabled={loading}
              type="submit"
              leftIcon={<FaEnvelope size={15} className="text-white" />}
              className="bg-blue-600 gover:bg-blue-700"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Modal>

      {/* NAVBAR */}

      <nav className="container flex items-center py-4 mb-12">
        <ul className="hidden sm:flex flex-1 flex-wrap lg:flex-nowrap md:flex-wrap justify-center items-center gap-6 lg:gap-10 md:gap-6 text-sm mt-2 text-semibold overflow-hidden">
          {navLinks.map((link) => {
            if (link?.contactButton) {
              return (
                <button onClick={() => setOpenModal(true)} key={link.text}>
                  <li
                    tabIndex={0}
                    className="mb-2 cursor-pointer tracking-widest hover:text-slate-500 text-center text-lg"
                  >
                    {link.text}
                  </li>
                </button>
              );
            }
            if (!link.external) {
              return (
                <Link key={link.href} href={link.href} passHref>
                  <li
                    tabIndex={0}
                    className="mb-2 cursor-pointer tracking-widest hover:text-slate-500 text-center text-lg"
                  >
                    {link.text}
                  </li>
                </Link>
              );
            }
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <li
                    tabIndex={0}
                    className="mb-2 cursor-pointer tracking-widest hover:text-slate-500 text-center text-lg"
                  >
                    {link.text}
                  </li>
                </a>
              );
            }
          })}
        </ul>
        <div className="flex sm:hidden flex-1 justify-end mr-4 mt-2">
          <FiMenu size={30} color="black" onClick={toggleMenu} />
        </div>
      </nav>
      <div className="sm:hidden md:block lg:block">
        <MobileNav
          isOpen={isOpen}
          navLinks={navLinks}
          toggleMenu={toggleMenu}
          setOpenModal={setOpenModal}
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
    external: false,
    icon: <AiOutlineHome size={20} className="mb-1 mr-2" />,
  },
  {
    text: "GitHub",
    href: "https://github.com/adrienclay36?tab=repositories",
    external: true,
    icon: <BsGithub size={20} className="mb-1 mr-2" />,
  },
  {
    text: "Resume",
    href: "https://www.dropbox.com/s/ysp0lt8g2fakds7/Adrien%20Clay%20-%20Resume%20Technical.pdf?dl=0",
    external: true,
    icon: <HiOutlineDocumentText size={20} className="mr-2" />,
  },
  {
    text: "Contact",
    href: "",
    external: false,
    icon: <AiOutlineMessage size={20} className="mr-2" />,
    contactButton: true,
  },
];
