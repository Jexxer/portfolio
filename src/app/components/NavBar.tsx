"use client";
import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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

  const links = [
    {
      id: 1,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 2,
      name: "Education",
      href: "/education",
    },
    {
      id: 3,
      name: "Work History",
      href: "/work-history",
    },
  ];

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
      className="sticky top-0 bg-theme-bg w-full transition duration-300 z-50"
    >
      <div className="flex justify-between p-5 items-center h-16">
        <h2 className="font-bold text-white text-2xl">Jesse Watson</h2>
        <div className="flex">
          {socials.map((link) => (
            <div key={link.id} className="mx-2">
              <a href={link.href} target="_blank">
                <div>{link.icon}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
