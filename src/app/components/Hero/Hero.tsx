import React from "react";
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
      <p className="text-theme-text text-2xl font-bold">Jesse Watson</p>
      {/* elevator pitch */}
    </div>
  );
};

export default Hero;
