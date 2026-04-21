import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#43358B",
          dark: "#352878",
          light: "#5a4aa0",
          50: "#f3f1fb",
          100: "#e6e2f7",
        },
        teal: {
          DEFAULT: "#009CB4",
          dark: "#007f95",
          light: "#33b5c9",
          50: "#e6f7fa",
          100: "#b3e7ef",
        },
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
