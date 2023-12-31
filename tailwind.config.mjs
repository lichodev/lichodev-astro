/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
        },
        background: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
        },
        primary: {
          50: "#eff6f2",
          100: "#deede6",
          200: "#bddbcc",
          300: "#9cc9b3",
          400: "#7bb799",
          500: "#5ba480",
          600: "#488466",
          700: "#36634d",
          800: "#244233",
          900: "#12211a",
          950: "#09100d",
        },
        secondary: {
          50: "#eff6f2",
          100: "#deede6",
          200: "#bddbcd",
          300: "#9cc9b4",
          400: "#7bb79b",
          500: "#5ba482",
          600: "#488468",
          700: "#36634e",
          800: "#244234",
          900: "#12211a",
          950: "#09100d",
        },
        accent: {
          50: "#eff6f2",
          100: "#deede5",
          200: "#bddbcc",
          300: "#9cc9b2",
          400: "#7bb798",
          500: "#5ba47e",
          600: "#488465",
          700: "#36634c",
          800: "#244233",
          900: "#122119",
          950: "#09100d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
