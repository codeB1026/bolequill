/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Mukta", "sans-serif"],
        main: ["Noto Sans", "sans-serif"],
        sub: ["Ubuntu", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
