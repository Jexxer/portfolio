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

      <section className="hero-info grid grid-cols-1 gap-3 place-items-center max-w-[1000px]">
        <h1 className="text-theme-text text-5xl font-bold">Jesse Watson</h1>
        <h2 className="text-theme-text text-2xl font-bold">
          Software Engineer
        </h2>
        <p className="text-theme-text max-w-[586px]">
          I'm a software engineer specialized in the creation and design of
          exceptional digital experiences Currently, I'm focused on building
          automated penetration testing web tools at{" "}
          <span className="text-theme-accent font-bold">OnDefend</span>
        </p>
      </section>
    </div>
  );
};

export default Hero;
