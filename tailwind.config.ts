import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
    screens: {
      mobile: { min: "320px", max: "767px" }, // Covers most phones
      tablet: { min: "768px", max: "1024px" }, // Covers tablets in both orientations
      laptop: { min: "1025px", max: "1440px" }, // Standard laptop range
      desktop: { min: "1441px", max: "1919px" }, // Standard desktop range
      largeScreen: { min: "1920px", max: "2560px" }, // Larger screens
    },
  },
  plugins: [],
};
export default config;
