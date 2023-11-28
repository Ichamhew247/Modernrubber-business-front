/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope"],
      },
      // backgroundImage: {
      //   greenImage: "url('/src/assets/imageProduct/greenwave.svg')",
      // },
    },
  },
  plugins: [require("daisyui")],
};
