module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "576px",
      // => @media (min-width: 576px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        patrick: ["Patrick Hand", "sans-serif"],
        vujahaday: ["Vujahday Script"],
      },
      colors: {
        primary: "#fcdc00",
        hoverPrimary: "#eccd00",
      },
      height: {
        100: "80vh",
      },
      width: {
        100: "90vh",
      },
    },
  },
  plugins: [],
};
