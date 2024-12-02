import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundColor: {
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
        blackOverlaySection: "rgba(0, 0 ,0 ,0.6)",
        blackOverlayBackground: "rgba(0, 0 ,0 ,0.3)",
      },
      colors: {
        myGreen1:"#1F4529",
        myGreen2: "#47663B",
        myBrown1: "#D7B26D",
        myBrown2: "#EED3B1",
      },  
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
