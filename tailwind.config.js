/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        footer_bg: "#f1f3f4",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
