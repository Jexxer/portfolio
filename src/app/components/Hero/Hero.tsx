"use client";
import React from "react";
import classNames from "@/utils/classNames";
import FlipImage from "./components/FlipImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className={classNames(
        "min-h-[calc(100vh-4rem)] w-full",
        "flex flex-col items-center",
        "relative",
        "mt-8",
        "md:mt-12",
        "lg:mt-16",
        "snap-start",
        "border-2"
      )}
    >
      {/* image */}
      <FlipImage />

      <AnimatePresence>
        <motion.section
          key="hero-section"
          className="hero-info grid grid-cols-1 gap-3 place-items-center max-w-[1000px] pt-8"
        >
          <motion.h1
            key="hero-name"
            className="text-theme-text text-5xl font-bold backdrop-blur-sm"
            initial={{ x: "100%", opacity: 1 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 1,
                transisiton: { ease: "easeIn" },
              },
            }}
          >
            Jesse Watson
          </motion.h1>
          <motion.h2
            key="hero-title"
            className="text-theme-text text-2xl font-bold backdrop-blur-sm"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1.5,
                transition: { ease: "easeIn" },
              },
            }}
          >
            Software Engineer
          </motion.h2>
          <motion.p
            key="hero-intro"
            className="text-theme-text max-w-[586px] backdrop-blur-sm text-center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 2,
                transition: { ease: "easeIn" },
              },
            }}
          >
            I&apos;m a software engineer specialized in the creation and design
            of exceptional digital experiences. Currently, I&apos;m focused on
            building automated penetration testing web tools at{" "}
            <span className="text-theme-accent font-bold">
              <Link target="_blank" href="https://ondefend.com/">
                OnDefend
              </Link>
            </span>
          </motion.p>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
