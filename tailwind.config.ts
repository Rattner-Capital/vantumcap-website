import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vantum: {
          navy: "#0C1523",
          ink: "#0A111D",
          gold: "#B79A63",
          lightGold: "#D9C08F",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(183, 154, 99, 0.3), 0 12px 36px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
