/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ["'Source Sans 3'", 'sans-serif'], // Corrigido a configuração da fonte
      },
      fontSize :{
        "small" : "12px",
        "medium" : "14px", 
        "large" : "20px",
        "extra-large" : "24px"
      },
      screens: {
        'xs': '320px',
        'xxs' : '412px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
