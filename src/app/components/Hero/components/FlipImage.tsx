import React from "react";
import Image from "next/image";
import classNames from "@/utils/classNames";

type Props = {};

const FlipImage = (props: Props) => {
  return (
    <div
      id="hero-img"
      className={classNames(
        "w-[320px] h-[320px] bg-transparent cursor-pointer group perspective"
      )}
    >
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000 border-4 rounded-full border-theme-accent">
        <div className="absolute backface-hidden w-full h-full">
          <Image
            src="/headshot.jpg"
            alt="hero"
            width={320}
            height={320}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="absolute rotate-y-180 backface-hidden w-full h-full">
          <Image
            src="/casuallyworking.jpg"
            alt="hero"
            width={320}
            height={320}
            className="rounded-full overflow-hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default FlipImage;
