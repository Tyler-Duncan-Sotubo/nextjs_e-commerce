/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { display: ["Poppins", "sans-serif"] },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(500px)", opacity: "0" },
          "100% ": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slide: "slideIn 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
