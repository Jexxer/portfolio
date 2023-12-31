"use client";
import { loadImageShape } from "tsparticles-shape-image";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadImageShape(engine);
    // console.log(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // conditional loading should happen here.
      return;
    },
    []
  );

  return (
    <Particles
      className="absolute w-full -z-10 bg-theme-bg"
      id="tsparticles"
      // url="http://foo.bar/particles.json"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 1 },
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0,
              sync: true,
              startValue: "max",
              count: 1,
              destroy: "min",
            },
            value: {
              min: 0,
              max: 0.4,
            },
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/golog.png?raw=true",
                width: 250,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/jslog.png?raw=true",
                width: 250,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/pylog.png?raw=true",
                width: 250,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/javalog.png?raw=true",
                width: 250,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/comment1.png?raw=true",
                width: 350,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/comment2.png?raw=true",
                width: 350,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/comment3.png?raw=true",
                width: 350,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/comment4.png?raw=true",
                width: 350,
                height: 30,
              },
              {
                src: "https://github.com/Jexxer/portfolio/blob/master/public/text/comment5.png?raw=true",
                width: 350,
                height: 30,
              },
            ],
          },
          size: {
            value: {
              min: 50,
              max: 76,
            },
          },
        },
      }}
    />
  );
};

export default Background;
