/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#000000",

          "secondary": "#F9F9F9",

          "accent": "#F3F3F3",

          "neutral": "#251E2A",

          "base-100": "#fff",

          "info": "#44BAD5",

          "success": "#0F6732",

          "warning": "#C89B09",

          "error": "#F44358",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
