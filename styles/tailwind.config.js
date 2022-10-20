const colors = require("tailwindcss/colors");
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["acuminprowide-regular"],
      'semibold': ['acuminprowide-semibold', 'sans-serif'],
    },
    colors: {
      neutral: "#F1F1ED",
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        200: "#C3C2C1",
        400: "#888888",
        800: "#424242",
        900: "#1B1B1B",
      },
      green: {
        50: "#dee6e5",
        100: "#bdcdcb",
        200: "#9bb4b1",
        300: "#7a9b97",
        400: "#59827d",
        500: "#507571",
        600: "#3e5b58",
        700: "#2d413f",
        800: "#1b2725",
        900: "#090d0c",
      },
      red: {
        50: "#faf0ef",
        100: "#efd2ce",
        200: "#e5b4ae",
        300: "#da958e",
        400: "#cf776d",
        500: "#ca685d",
        600: "#a2534a",
        700: "#793e38",
        800: "#512a25",
        900: "#281513",
      },
      blue: {
        50: "#4285f4",
        100: "#d9e7fd",
        200: "#356ac3",
        300: "#2e5dab",
        400: "#285092",
        500: "#21437a",
        600: "#1a3562",
        700: "#142849",
        800: "#0d1b31",
        900: "#070d18",
      },
      slate: {
        300: "#78909c",
      },
      teal: {
        300: "#0097a7",
      },
      orange: {
        300: "#ffab40",
      },
      yellow: {
        300: "#eeff41",
      },
    },
    extend: {
      colors: {
        change: 'black',
      },
    },
  },
  plugins: [],
}
