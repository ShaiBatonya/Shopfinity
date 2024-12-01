/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px", // Maintain the main content width for desktops
        content: "1200px", // For text and essential content
        section: "1024px", // For specific sections
      },
      screens: {
        xs: "320px", // Extra small devices (phones)
        sm: "375px", // Small phones
        sml: "500px", // Medium small
        md: "667px", // Default tablets
        mdl: "768px", // Medium devices (tablets and small laptops)
        lg: "960px", // Laptops
        lgl: "1024px", // Large laptops
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // Ultra-wide screens
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"], // Clean and modern body text
        titleFont: ["Poppins", "sans-serif"], // Elegant titles
        altFont: ["Montserrat", "sans-serif"], // For alternates or highlights
      },
      colors: {
        primeColor: "#1A202C", // Darker color for luxurious feel
        secondaryColor: "#4A5568", // Neutral and modern intermediate
        accentColor: "#ECC94B", // Unique yellow for call-to-actions
        lightText: "#718096", // Light grey for secondary text
        background: "#F7FAFC", // Neutral light background
        highlight: "#3182CE", // For hover states or focused actions
        error: "#E53E3E", // Error states
        success: "#38A169", // Success notifications
      },
      boxShadow: {
        testShadow: "0px 4px 20px rgba(0,0,0,0.15)", // Subtle shadows
        primaryShadow: "0px 8px 30px rgba(0,0,0,0.2)", // Strong focus shadow
        cardShadow: "0px 2px 10px rgba(0,0,0,0.1)", // For cards or containers
        hoverShadow: "0px 6px 25px rgba(0,0,0,0.12)", // For hover states
      },
      spacing: {
        18: "4.5rem", // Custom spacing for padding/margin
        22: "5.5rem",
        26: "6.5rem",
        "4/5": "80%", // Proportional spacing
      },
      borderRadius: {
        xl: "1.25rem", // Standard for large rounded elements
        "2xl": "1.5rem", // Enhanced rounded corners for emphasis
        full: "9999px", // Fully rounded for badges or circular elements
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-animate"), // For animations
    require("@tailwindcss/forms"), // Styled forms
    require("@tailwindcss/typography"), // Typography plugin
    require("@tailwindcss/aspect-ratio"), // Aspect ratio support
  ],
};
