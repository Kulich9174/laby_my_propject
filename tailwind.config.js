/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,md,png}",
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
        'calc':'calc(100% - 4px)',
      },
      colors:{
        'white':'#FFFFFF'
      },
      backgroundImage: {
        'plane': "url('/src/assets/images/Rectangle2.png')",
        'flowers' : "url('/src/assets/images/Rectangle1.png')",
      }
      
    },
    screens: {
      'sm': {'max': '765px'},
      // => @media (max-width: 639px) { ... }
      
      'laptop': {'min': '765px', 'max': '1280px'},
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
