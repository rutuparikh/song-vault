/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bhatkande: ['ome_bhatkhande_hindi'],
      }
    },
  },
  plugins: [],
}