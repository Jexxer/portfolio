import Image from "next/image";
import Tilt from "react-parallax-tilt";

const AboutMe = () => {
  return (
    <div className="w-full h-full">
      <MyInfo />
      <Introduction />
    </div>
  );
};

const MyInfo = () => {
  return (
    <section className="rounded-lg m-3 p-5 flex flex-1 flex-col lg:flex-row bg-neutral-500 shadow-md">
      <div className="rounded-full place-self-center overflow-hidden w-[120px] h-[120px] relative">
        <Image
          src="/headshot.jpg"
          fill
          alt="Jesse Watson headshot"
          sizes="(max-width: 120px) (max-height: 120px)"
        />
      </div>

      <div className="flex flex-1 items-center justify-center mb-4">
        <div className="flex flex-col">
          <span className="text-bold text-white text-2xl">Jesse Watson</span>
          <span className="text-bold text-white text-xs place-self-center">
            Software Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

import React from "react";

const Introduction = () => {
  return (
    <div className="rounded-lg m-3 p-5 flex flex-col bg-neutral-500 text-white">
      <p>
        With a background in tech that goes back as far as 2015 and a passion
        for learning, I have worked in various areas of development, deployment,
        and design. My hyper focused mentality allows me to create products with
        efficiency and accuracy at the forefront.
      </p>
      <br />
      <p>
        Some of my favorite projects have been the ones that really test my
        critical thinking. I cherish the challenges that come with being a
        Software Engineer. I jump at any opportunity to learn something new,
        thought provoking as it may be.
      </p>
    </div>
  );
};

export default AboutMe;
