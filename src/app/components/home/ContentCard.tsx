import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

type Props = {};

const ContentCard = (props: Props) => {
  return (
    <div className="h-[calc(100%-4rem)] w-full flex justify-center items-center">
      <div className="w-[calc(100%-32px)] md:w-3/4 lg:w-1/2 h-2/3 bg-neutral-700/80 rounded-md backdrop-blur-sm">
        <div className="flex flex-col md:flex-row lg:flex-row w-full h-full">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
