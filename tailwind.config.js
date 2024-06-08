/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home.html",
    "./gallary.html",
    "./blog.html",
    "./news.html",
    "./contact.html",
    "./about.html",
    "./form.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        footer_bg: "#f1f3f4",
        card_bg: "#f1f9ff",
        logo_blue: "#019de6",
        blueish_dark: "#00234c",
        navbar_color: "#e3e6f3",
        footer_color: "#041e42",
        pink_color: "#ff5e57",
        blue_light: "#d1f6ff",
      },
      fontFamily: {
        Title: ["Roboto"],
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        gallaryTitle: ["Rock Salt", "sans-serif"],
      },
      bannerImg:{
        banner:"url"
      }
    },
  },
  plugins: [],
};
