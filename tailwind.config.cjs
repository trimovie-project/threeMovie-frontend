const { default: themes } = require("daisyui/src/colors/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        component: "#212121",
        hover: "#3DD2CC",
        text1: "#E8E8E8",
        text2: "#666666",
        button: "#FEFEFE",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: false,
  },
};
