/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gif: "url('public/images/pokeBackground.png')",
      }),
    },
    fontFamily: {
      Pixelify: ["Pixelify Sans", "sans-serif"],
      Sans: ["sans-serif"],
    },
  },
  plugins: [],
};
