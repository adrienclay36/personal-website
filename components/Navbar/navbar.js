import React, { useState } from "react";
import { Burger, Modal, TextInput, Textarea, Button } from "@mantine/core";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsGithub, BsCheckCircle } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import emailjs, { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID);
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
          setSuccess(true);
          closeAndClear();
        } else {
          setSuccess(false);
          setError(true);
          closeAndClear();
        }
      } catch (err) {
        closeAndClear();
        setError(true);
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

      {/* SUCCESS MODAL */}
      <Modal opened={success} onClose={() => setSuccess(false)} centered>
        <div className="flex flex-1 justify-center items-center">
          <BsCheckCircle size={75} className="text-green-700 mb-6" />
        </div>
        <p className="text-center font-semibold ">
          Thank you for your email! I will get back to you as soon as possible!
        </p>
      </Modal>

      {/* ERROR MODAL */}

      <Modal opened={error} onClose={() => setError(false)} centered>
        <div className="flex flex-1 justify-center items-center">
          <BiErrorCircle size={75} className="text-red-700 mb-6" />
        </div>
        <p className="text-center font-semibold ">
          Sorry, something went wrong. Feel free to shoot me an email using your
          provider at{" "}
          <a
            href="mailto:adrienclay36@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer hover:underline text-blue-800"
          >
            this link.
          </a>
        </p>
      </Modal>

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
          toggleMenu={toggleMenu}
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
    href: "/AC_Resume.pdf",
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
