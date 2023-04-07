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
        },
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /opacity-\d+/ }, { pattern: /(bg|object)-\w+/ }],
};
