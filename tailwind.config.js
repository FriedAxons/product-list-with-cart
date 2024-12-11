/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)", // Custom red
        "red-hover": "hsl(14, 86%, 36%)", // Darker custom red for hover
        green: "hsl(159, 69%, 38%)", // Custom green
        rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
      fontSize: {
        "product-name": "16px", // Font size for product names
      },
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"], // Custom font family
      },
    },
  },
};
