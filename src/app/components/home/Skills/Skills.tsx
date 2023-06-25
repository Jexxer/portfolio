"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

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
        title: "Is tech making coffee better or worse?",
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
      },
    ],
    Additional: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      },
    ],
  });

  return (
    <div className="w-full m-3 sm:px-0">
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
                  <li className="text-sm font-medium leading-5 text-white">
                    &middot; {item.title}
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
