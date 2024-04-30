/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik"'],
      },
      colors: {
        'primary-blue':'#007ec5',
        'secondary-blue':'#092145',
        'primary-bg-blue':'#010624',
        'secondary-bg-blue':'#0b102d',
        'primary-red': '#ff165c'
      },
    },
  },
  plugins: [],
}

