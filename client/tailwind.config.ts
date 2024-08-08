import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      // Dark Mode
        'flame-dark': {
          100: '#F19B7E',
          200: '#EE7E59',
          300:'#E85A29',
          400: '#DE4917',
          500: '#B93D13'
        },
        'tekhelet-dark': {
          100: '#9483C3',
          200: '#7C68B6',
          300: '#473773',
          400: '#3D2E60',
          500: '#2C2145',
        },
      // Light Mode
      'flame-light':{
        100: '#F8D1B4',
        200: '#F7BF9E',
        300: '#F6AD88',
        400: '#F69B72',
        500: '#F5895C'
      },
      'tekhelet-light':{
        100: '#E1D8F7',
        200: '#D7C8F3',
        300: '#D0BEF2',
        400: '#C0A7EB',
        500: '#B596E5',
      }
    },
    fontFamily:{
      "Dosis": ["Dosis", "sans-serif"],
      "Nunito":["Nunito", "sans-serif"],
      "Nunito-italic": ["Nunito-italic", "sans-serif"],
      "Sofia":["Sofia","cursive"]
    }
  },
  plugins: [],
};
export default config;
// @font-face {
//   font-family: Sofia;
//   src: url(../fonts/Sofia-Regular.ttf) format(truetype);
// }