"use client";
import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import classNames from "@/utils/classNames";
import { links } from "./data";

type Props = {};

const NavBar = (props: Props) => {
  useEffect(() => {
    let navbar = document.getElementById("navbar");
    let prevScrollPosition = window.scrollY;
    window.onscroll = function () {
      if (!navbar) return;

      const currentScrollPosition = window.scrollY;
      const scrollUp = prevScrollPosition > currentScrollPosition;
      if (scrollUp) {
        navbar.classList.remove("-translate-y-16", "transparent");
      } else {
        navbar.classList.add("-translate-y-16", "shadow-xl", "bg-theme-bg");
      }
      prevScrollPosition = currentScrollPosition;
      if (currentScrollPosition === 0) {
        navbar.classList.remove("shadow-xl", "bg-theme-bg");
        navbar.classList.add("transparent");
      }
    };
  }, []);

  const socials = [
    {
      id: 1,
      for: "linkedin",
      icon: <FaLinkedin size={32} color="white" />,
      href: "https://www.linkedin.com/in/jwatsoncode/",
    },
    {
      id: 2,
      for: "github",
      icon: <FaGithub size={32} color="white" />,
      href: "https://github.com/Jexxer",
    },
  ];
  return (
    <div
      id="navbar"
      className="sticky top-0 w-full transition duration-300 z-50 overflow-x-clip"
    >
      {/* Desktop */}
      <div className="hidden justify-between p-5 items-center h-16 md:flex lg:flex">
        <h2 className="font-bold text-white text-2xl">Jesse Watson</h2>
        <div className="flex items-center">
          {links.map((link) => (
            <div
              key={link.id}
              className={classNames("mx-3", "hover:scale-110 duration-300")}
            >
              <a
                href={link.href}
                className={classNames(
                  "text-theme-text",
                  "hover:text-theme-accent",
                  "duration-300"
                )}
              >
                {link.name}
              </a>
            </div>
          ))}
          <div>
            <button className="border-2 border-theme-accent text-theme-accent rounded py-1 px-2 shadow font-bold hover:bg-theme-accent hover:text-theme-bg duration-300 hover:scale-110">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <HamburgerMenu />
    </div>
  );
};

export default NavBar;
