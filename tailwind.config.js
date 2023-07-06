/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "0px",
      md: "500px",
      semi: "800px",
      lg: "1024px",
      xl: "1280px",
      "home-xl": "1414px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
        Darker_Grotesque: ["Darker Grotesque, sans-serif"],
        Work_Sans: ["Work Sans, sans-serif"],
      },
      colors: {
        "text-light-color": "var(--text-light-color)",
        "text-dark-color": "var(--text-dark-color)",
        "background-color": "var(--background-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "accent-color": "var(--accent-color)",
        "highlight-color": "var(--highlight-color)",
      },
      variables: {
        "border-size": "var(--border-size)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
