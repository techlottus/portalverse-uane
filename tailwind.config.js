/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{      
      "w-p": {"max": '599px'},
      "w-t": {"min": '600px', "max": "1023px"},
      "w-d": {"min": '1024px'},
      "w-d-base": {"max": '1300px'}
    },
    maxWidth: {
      "d-base": "1200px",
    },
    extend: {
      spacing: {
        "12.5": "3.125rem",
        "8.5": "2.125rem",
        18: "4.5rem",
        22: "5.5rem",
        "grid-gap": "1.5rem"
      },
      fontSize: {
        "5.5": "1.375rem",
        "8.5": "2.125rem",
        10: "2.5rem",
        13: "3.25rem",
      },
      lineHeight: {
        "5.2": "1.3rem",
        "8.6": "2.172rem",
        "12.5": "3.125rem",
        "16.25": "4.063rem",
      },
      colors: {
        "SC-Actions-AC-200": "#F2F2F2",
        "SC/Blackandgrey/B-60": "#686868",
        "SC/Backgrounds/BG-GRAY": "#F2F2F2",
        "Brands/UANE/Primary/UANE-P-00": "#B0003C",
        "UNI-066": "#555555",
        "dark": "#282828",
      },
      fontFamily: {
        "Nunito": ["Nunito"],
        "Poppins": ["Poppins"],
      },
      gridTemplateColumns:{
        "12-gap": 'repeat(12, minmax(0, 1fr))',
        "12-nogap": 'repeat(12, minmax(0, 1fr))',
        "8-gap": 'repeat(8, minmax(0, 1fr))',
        "8-nogap": 'repeat(8, minmax(0, 1fr))',
        "4-gap": 'repeat(4, minmax(0, 1fr))',
        "4-nogap": 'repeat(4, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}