/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils//**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Ligth theme
        light: {
          primary: "#5956E9",
          secondary: "#FAB8C4",
          tertiary: "#F7B538",
          hot: "#F58071",
          light: "#FBFBFF",

          "content-text": "#000000",
        },

        dark: {
          primary: "#37392e",
          secondary: "#EAEEF3",
          tertiary: "#FBBF24",
          hot: "#f6d809",
          dark: "#37392e",

          "content-text": "#a4dad2",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
