/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#05a8c1",
        "secondary": "#f7bed3",
        "accent": "#ef9d9b",
        "neutral": "#201D25",
        "base-100": "#FFFFFF",
        "info": "#69B9F2",
        "success": "#7EE7C9",
        "warning": "#FAD047",
        "error": "#E35962",
      },
    }, "light", "dark", "cupcake",
      "bumblebee", "emerald", "corporate",
      "synthwave", "retro", "cyberpunk",
      "valentine", "halloween", "garden",
      "forest", "aqua", "lofi", "pastel",
      "fantasy", "wireframe", "black",
      "luxury", "dracula", "cmyk",
      "autumn", "business", "acid",
      "lemonade", "night", "coffee",
      "winter"],
  },
}
