import React from "react";
import classNames from "@/utils/classNames";
import FlipImage from "./components/FlipImage";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className={classNames(
        "min-h-[calc(100vh-4rem)] w-full",
        "flex flex-col items-center",
        "relative",
        "lg:mt-16"
      )}
    >
      {/* image */}
      <FlipImage />

      <section className="hero-info grid grid-cols-1 gap-3 place-items-center max-w-[1000px]">
        <h1 className="text-theme-text text-5xl font-bold backdrop-blur-sm">
          Jesse Watson
        </h1>
        <h2 className="text-theme-text text-2xl font-bold backdrop-blur-sm">
          Software Engineer
        </h2>
        <p className="text-theme-text max-w-[586px] backdrop-blur-sm">
          I&apos;m a software engineer specialized in the creation and design of
          exceptional digital experiences Currently, I&apos;m focused on
          building automated penetration testing web tools at{" "}
          <span className="text-theme-accent font-bold">
            <Link target="_blank" href="https://ondefend.com/">
              OnDefend
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Hero;
