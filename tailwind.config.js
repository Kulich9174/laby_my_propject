/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,ts,jsx,tsx,md,png}",
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './public/**/*.{html,js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    spacing: {
      '9px': '9px',
      '11px': '11px',
      '56px': '56px',
      'calc': 'calc(100% - 4px)',
    },
    colors: {
      'white': '#FFFFFF',
      'border':' rgba(43, 61, 82, 0.30)',
    },
    backgroundImage: {
      'plane': "url('/src/assets/images/Rectangle2.png')",
      'flowers': "url('/src/assets/images/Rectangle1.png')",
    }
  },
  screens: {
    'sm': { 'max': '1050px' },
    // => @media (max-width: 639px) { ... }
    'laptop': { 'min': '1050px', 'max': '1300px' },
    // => @media (min-width: 1024px) { ... }
    'desktop': { 'min': '1300px' },
    // => @media (min-width: 1280px) { ... }
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
  },

  gridTemplateColumns: {
    '40/60': '40% 60%',
    '50/50': '50% 50%',
  }
};
export const plugins = [];
