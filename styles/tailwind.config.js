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
        100: "#F2F2F2",
        200: "#EDEDED",
        300: "#CFCFCF",
        400: "#888888",
        500: "#1B1B1B",
      },
      green: {
        100: "#C7D6D4",
        200: "#AAC9C5",
        300: "#59827D",
      },
      red: {
        100: "#EDA79E",
        200: "#DD8C82",
        300: "#CA685D",
        400: "#B94D40",
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
      backgroundImage: {
        'ellipse-23': "url('../images/ellipse-23.png')",
      },
    },
  },
  plugins: [],
}
