import type { Config } from "tailwindcss";

const config: Config = {
  mod: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-diagonal":
          "repeating-linear-gradient(-45deg, rgba(31, 41, 55, 0.1), rgba(31, 41, 55, 0.1) 2px, transparent 2px, transparent 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
