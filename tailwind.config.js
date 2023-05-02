/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'd-primary': '#02010a',
        'd-secondary': '#141414',
        'd-accent': '#fb8500',
        'd-text': '#adb5bd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        apple: ['"SF UI Text"', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      fontWeight: {
        thin: 200,
        light: 300,
        normal: 400,
        medium: 600,
        semibold: 700,
        // ...
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}

