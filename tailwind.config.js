/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Parisienne"],
        body: ["Parisienne"],
      },
      backgroundImage: {
        greenImage: "url('/src/assets/greenwave.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
