/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ab66",
        yellow: "#f8f806",
        light: "#f8f8f8",
        secondary: "#2f308a",
        thirdy: "#00c2ff",
        green: "#c2ce3b",
        text: "#4b5563",
      },
    },
  },
};
