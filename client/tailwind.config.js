/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Deep-navy-blue": "#01257D",
        "electric-blue":"#00FFFA",
        "L-blue": "#E9F1FA",
        "Bri-blue": "#00ABE4"
      },

    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
};
