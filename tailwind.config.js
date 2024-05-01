/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"'],
      },
      colors: {
        'primary-blue':'#007ec5',
        'secondary-blue':'#092145',
        'accent-blue': '#1e223d',
        'primary-bg-blue':'#010624',
        'secondary-bg-blue':'#0b102d',
        'primary-red': '#ff165c'
      },
    },
  },
  plugins: [],
}

