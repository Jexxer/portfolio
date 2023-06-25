"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

type Item = {
  id: number;
  title: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Languages: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "JavaScript / TypeScript",
      },
      {
        id: 3,
        title: "Python",
      },
      {
        id: 4,
        title: "GoLang",
      },
      {
        id: 5,
        title: "C#",
      },
    ],
    Skills: [
      {
        id: 1,
        title: "Git",
      },
      {
        id: 2,
        title: "Azure DevOps",
      },
      {
        id: 3,
        title: "Django",
      },
      {
        id: 4,
        title: "React",
      },
      {
        id: 5,
        title: "Next.js",
      },
      {
        id: 6,
        title: "Express",
      },
      {
        id: 7,
        title: "Node.js",
      },
      {
        id: 8,
        title: "MongoDB",
      },
      {
        id: 9,
        title: "PostgreSQL",
      },
      {
        id: 10,
        title: ".NET",
      },
      {
        id: 11,
        title: "Mobile First development",
      },
    ],
    Tools: [
      {
        id: 1,
        title: "Restful API's",
      },
      {
        id: 2,
        title: "Bootstrap",
      },
      ,
      {
        id: 3,
        title: "MUI",
      },
      {
        id: 4,
        title: "ChakraUI",
      },
    ],
  });

  return (
    <div className="lg:w-full m-3 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-neutral-600 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-700 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-neutral-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((skills, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-neutral-500 p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {skills.map((item) => (
                  <li key={item!.id} className="text-white">
                    &middot; {item!.title}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
