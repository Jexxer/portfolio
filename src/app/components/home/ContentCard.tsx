import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

type Props = {};

const ContentCard = (props: Props) => {
  return (
    <div className="lg:h-[calc(100%-4rem)] md:h-[calc(100%-4rem)] flex justify-center md:items-center lg:items-center overflow-y-hidden py-4">
      <div className="max-w-[calc(100%-32px)] md:w-3/4 lg:w-1/2 min-h-2/3 bg-neutral-700/80 rounded-md backdrop-blur-sm max-h-full overflow-y-auto">
        <div className="flex flex-col lg:flex-row h-full w-full">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
