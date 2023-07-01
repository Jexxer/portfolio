import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills/Skills";
import classNames from "@/utils/classNames";

type Props = {};

const ContentCard = (props: Props) => {
  return (
    <div
      className={classNames(
        "py-4",
        "flex justify-center",
        "md:h-[calc(100vh-4rem)] md:items-center",
        "lg:h-[calc(100vh-4rem)] lg:items-center"
      )}
    >
      <div className="flex justify-center pt-16">
        <div
          className={classNames(
            "max-w-[calc(100%-32px)] min-h-2/3 h-full",
            "rounded-md",
            "bg-theme-primary/5 backdrop-blur-sm",
            "md:w-3/4",
            "lg:w-1/2"
          )}
        >
          <div className="flex flex-col lg:flex-row h-full w-full">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
