/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-blue": "#ECF0F9",
      "dark-blue": "#344563",
      "mid-blue": "#E9EDF6",
      "light-gray": "#EBECF0",
      blue: "#0061FF",
      gray: "#596880",
      border: "#DBDBDB",
      white: "#ffffff",
      "gray-blue": "#C1C7D0",
      orange: "#FB923C",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
