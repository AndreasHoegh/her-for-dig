/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        malkebotter: "url('/hfd.jpg')", // Definér brugerdefineret baggrundsbillede
      },
      fontFamily: {
        poppins: ["Poppins"], // Skrifttypen Poppins
      },
    },
  },
  plugins: [],
};
