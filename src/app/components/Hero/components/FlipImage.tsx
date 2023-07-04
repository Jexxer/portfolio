"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import classNames from "@/utils/classNames";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

type Props = {};

const FlipImage = (props: Props) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateImage = async () => {
      animate(
        scope.current,
        {
          scale: 1,
        },
        { duration: 1, delay: 1 }
      );
    };
    animateImage();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="hero-img"
        ref={scope}
        className={classNames(
          "w-[320px] h-[320px] bg-transparent group perspective"
        )}
        initial={{ y: "-100%", opacity: 0, scale: 2 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            transition: { ease: "easeIn" },
          },
        }}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipImage;
