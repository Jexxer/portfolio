import React from "react";
import Image from "next/image";
import classNames from "@/utils/classNames";
import FlipImage from "./components/FlipImage";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className={classNames(
        "min-h-screen w-full",
        "flex flex-col items-center",
        "relative"
      )}
    >
      {/* image */}

      <FlipImage />

      {/* title */}
      {/* elevator pitch */}
    </div>
  );
};

export default Hero;
