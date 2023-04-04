/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridAutoColumns: {
        "5fr": "minmax(0, 5fr)",
      },
    },
  },
  plugins: [],
};
