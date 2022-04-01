module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primaryFont: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1124px", xl: "1124px", "2xl": "1124px" },
    },
    extend: {},
  },
  plugins: [],
};
