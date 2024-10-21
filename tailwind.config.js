/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0BE58A', // Replace with your desired color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


