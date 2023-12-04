/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope"],
      },
    },
    screens: {
      xs: "430px",
      //ยังไม่ได้แก้เลย
      // => @media (min-width: 430px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      //ยังไม่ได้แก้เลย
      md: "768px",
      // => @media (min-width: 768px) { ... }
      //ยังไม่ได้แก้เลย
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
