/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html", "./gallary.html", "./contact.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        footer_bg: "#f1f3f4",
        card_bg: "#f1f9ff",
        logo_blue: "#019de6",
        blueish_dark: "#00234c",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
