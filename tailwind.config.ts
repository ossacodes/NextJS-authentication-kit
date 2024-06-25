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

      colors: {
        "pastel-pink": "#FFF0F5",
        "pastel-yellow": "#FFFAF0",
        "otake-primary": "#FF69B4",
        "otake-secondary": "#4B0082",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner-glow": "inset 0 0 5px rgba(255, 105, 180, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
