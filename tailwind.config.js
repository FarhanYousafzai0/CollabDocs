/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#0b1527",
          200: "#0f1c34",
          300: "#1b2840",
          350: "#161e30",
          400: "#2e3d5b",
        },
        doc: "#101623",
      },
    },
  },
  plugins: [],
};
