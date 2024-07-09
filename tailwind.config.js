/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pnbPurple: "#7833AE",
        searchBackgroundGrey: "#F2F4F5",
        searchBorderGrey: "#D7D7D7",
        inputTextGrey: "#A1A0A7",
        searchBorderGlassGrey: "rgba(5, 41, 77, 0.1)",
        transparentWhite: "rgba(255, 255, 255, 0)",
        textGrey: "#6F7071",
        textBlack: "#242424",
        reviewTextGrey: "#5F6D7E",
        formInputGrey: "rgba(16, 24, 40, 0.5)",
        formTitleBlack: "#101828",
      },
      backgroundImage: {
        logoBlur: "url('/src/assets/images/Gradient+Blur.png')",
      },
    },
  },
  plugins: [],
};
