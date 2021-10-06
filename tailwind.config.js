const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#67cd32",
        primaryDarker: "#53a428",
        primaryLighter: "#86d75b",
        secondary: "#ff6600",
        secondaryDarker: "#cc5200",
        secondaryLighter: "#ff8533",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
