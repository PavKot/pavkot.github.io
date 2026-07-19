/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        ink: "#0C0C0C",
        mist: "#D7E2EA",
      },
    },
  },
  plugins: [],
};
