/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,md}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      spacing: {
        '9px': '9px',
        '11px': '11px',
        '56px':'56px',
        'calc':'calc(100vh - 3.5rem)',
      },
      colors:{
        'white':'#FFFFFF'
      },
      backgroundImage: {
        'plane': "url('../pictures/Rectangle 2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
    screens: {
      'sm': {'max': '768px'},
      // => @media (max-width: 639px) { ... }
      
      'laptop': {'min': '768px', 'max': '1280px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
      // 'huge' : {'min': '1920px'}
    },

    
    fontFamily: {
      'Montserrat': ['Montserrat'],
      'body': ['"Montserrat"'],
      'header': ['"Montserrat"'],
    },

    fontSize: {
      sm: '8px',
      base: '12px',
      xl: '1.25rem',
      '2xl': '1.563rem',
    }
  },
  plugins: [],
}
