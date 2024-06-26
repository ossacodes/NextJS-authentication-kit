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

        "neu-bg": "#e0e5ec",
        "neu-shadow-dark": "rgba(163, 177, 198, 0.5)",
        "neu-shadow-light": "rgba(255, 255, 255, 0.5)",
        "neu-text": "#2d3748",
        "neu-highlight": "#4299e1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner-glow": "inset 0 0 5px rgba(255, 105, 180, 0.5)",
        // login-11 and signup-11 style
        neo: "5px 5px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
export default config;
