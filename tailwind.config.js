/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "jpg",
    "png",
  ],
  theme: {
    extend: {
      colors: {
        newGreen: "#0D2327",
        newPink: "#BC0780",
        newBlue: "#1F2184",
        newPurple: "#8C68CC",
        newOrange: "#F45313",
      },
      backgroundImage: {
        testImg: "url('./src/Assets/testImg.jpg')",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
