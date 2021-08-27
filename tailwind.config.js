module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        active: "var(--active)",
        hover: "var(--hover-dark)",
      },
      textColor: {
        default: "var(--text-default)",
        "default-alt": "var(--text-default-alt)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
    },
    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
