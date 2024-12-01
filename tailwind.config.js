/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
        altFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primeColor: "#1A202C", // כהה יותר עבור תחושת יוקרה
        secondaryColor: "#4A5568", // גוון ביניים מודרני
        accentColor: "#ECC94B", // צהוב ייחודי למוקדים חשובים
        lightText: "#718096", // אפור בהיר לטקסט משני
        background: "#F7FAFC", // רקע כללי
      },
      boxShadow: {
        testShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        primaryShadow: "0px 8px 30px rgba(0,0,0,0.2)",
        cardShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
};
