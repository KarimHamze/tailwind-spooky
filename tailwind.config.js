/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "color-1": "#06487D",
      "color-2": "#0B0819",
      fontFamily: {
        "font-family": ["Nosifer", "sans-serif"],
        "font-spookie": ["Griffy", "system-ui"],
      },
      "spookie-bg":
        "https://www.freepik.es/fotos-premium/casa-embrujada-halloween-dibujos-animados-luna-llena_74855188.htm",
    },
  },
  plugins: [],
};
