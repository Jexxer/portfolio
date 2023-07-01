"use client";
import { loadTextShape } from "tsparticles-shape-text";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadTextShape(engine);
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
      className="absolute w-full h-full -z-10 bg-theme-bg"
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
            value: 80,
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
              max: 0.5,
            },
          },
          shape: {
            type: ["circle", "char"],
            options: {
              char: {
                value: {
                  0: "h",
                  1: "c",
                },
                font: "Verdana",
                style: "",
                weight: 400,
                fill: true,
              },
            },
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default Background;
