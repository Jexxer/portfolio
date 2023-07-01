/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const flipClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar"),
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            "theme-text": "#b3c9ff",
            "theme-primary": "#a3d8e0",
            "theme-secondary": "#fbf5f4",
            "theme-accent": "#57b8c7",
            "theme-bg": "#000929",
          },
        },
      },
      themes: [
        {
          name: "purple",
          extend: {
            colors: {
              "theme-text": "#b3c9ff",
              "theme-primary": "#c509d3",
              "theme-secondary": "#facefd",
              "theme-accent": "#ae08ba",
              "theme-bg": "#000929",
            },
          },
        },
        {
          name: "green",
          extend: {
            colors: {
              "theme-text": "#b3c9ff",
              "theme-primary": "#18e233",
              "theme-secondary": "#49eeaf",
              "theme-accent": "#048b16",
              "theme-bg": "#000929",
            },
          },
        },
        {
          name: "teal",
          extend: {
            colors: {
              "theme-text": "#e2dddf",
              "theme-primary": "#38ffdb",
              "theme-secondary": "#b0acb0",
              "theme-accent": "#3d898d",
              "theme-bg": "#0c1318",
            },
          },
        },
      ],
    }),
    flipClass,
  ],
};
