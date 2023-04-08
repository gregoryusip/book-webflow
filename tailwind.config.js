/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary-one": "#1B3764",
        "primary-two": "#FFCA42",
        "primary-three": "#F6F8FC",
        "dark-text": "#1F1F1F",
        "gray-text": "#969AA0",
        "light-text": "#B4C7E7",
        "light-gray": "#F6F6F6",
        "dark-gray": "#4D5053",
      },

      fontSize: {
        20: ["20px"],
        22: ["22px", "40px"],
        25: ["25px", "45px"],
        32: ["32px"],
        35: ["35px", "50px"],
        40: ["40px"],
        50: ["50px", "60px"],
        56: ["56px"],
        85: ["85px", "106.25px"],
      },
    },
  },
  plugins: [],
};
