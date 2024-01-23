/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gif: "url('/images/pokeBackground.png')",
      }),
    },

    screens: {
      "2xl": "2560px",
      xl: "1920px",
      lg: "1024px",
      md: "768px",
      sm: "320px",
    },

    fontFamily: {
      Pixelify: ["Pixelify Sans", "sans-serif"],
      Sans: ["sans-serif"],
    },
  },
  plugins: [],
};
