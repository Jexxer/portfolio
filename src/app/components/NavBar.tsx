import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {};

const NavBar = (props: Props) => {
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
    <nav className="bg-neutral-700 drop-shadow-sm sticky top-0 w-full">
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
    </nav>
  );
};

export default NavBar;
