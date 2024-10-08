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
      height: {
        "15vh" : "15vh",
        "25vh" : "25vh",
        "35vh" : "35vh",
        "45vh" : "45vh",
        "60vh" : "60vh",
        "70vh" : "70vh",
        "75vh" : "75vh",
        "80vh" : "80vh",
      }
    },
  },
  plugins: [],
};
export default config;
