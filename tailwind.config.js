const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#BE3144",  //   rgb(99 102 241 / var(--tw-bg-opacity, 1))
        primary : "rgb(99 102 241 / var(--tw-bg-opacity, 1))"
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;
      const svgToDataUri = require("mini-svg-data-uri");

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      );
    },
  ],
}