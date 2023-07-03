/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#060B13",
          DEFAULT: "#060B13",
        },
        purpleGrey: "#777086",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /opacity-\d+/ },
    { pattern: /(bg|object)-\w+/ },
    { pattern: /(w|h)-\w+/ },
    { pattern: /(col-span)-\w+/ },
  ],
};
