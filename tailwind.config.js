/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
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
  safelist: [{ pattern: /opacity-\d+/ }, { pattern: /bg-\w+/ }],
};
