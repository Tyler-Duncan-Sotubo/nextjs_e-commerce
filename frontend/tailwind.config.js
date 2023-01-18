/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { display: ["Poppins", "sans-serif"] },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(500px)", opacity: "0" },
          "100% ": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(60px)" },
          "25%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(45px)" },
          "75% ": { transform: "translateY(35px)" },
          "100% ": { transform: "translateY(20px)" },
        },
      },
      animation: {
        slide: "slideIn 500ms ease-in-out",
        slideBottomIn: "slideInBottom 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
