/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mobile: "328px",
      sm: "400px",
      tablet: "660px",
      md: "768px",
      chromium: "900px",
      lg: "1024px",
      "min-laptop": "1138px",
      xl: "1280px",
      laptop: "1464px",

      "big-screen": "2000px",
    },
    extend: {
      fontFamily: {
        work: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
