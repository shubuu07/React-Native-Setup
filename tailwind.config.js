/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        int: ['Inter-Regular'],
        intMed: ['Inter-Medium'],
        intSemi: ['Inter-SemiBold'],
        intBold: ['Inter-Bold'],
        Muli: ['Mulish-Regular'],
        MuliMed: ['Mulish-Medium'],
        MuliSemi: ['Mulish-SemiBold'],
        MuliBold: ['Mulish-Bold'],
        MuliBlack: ['Mulish-Black'],
      },
      backgroundColor: {
        primary: '#ff5a00',
        secondary: 'rgb(252, 124, 59)',
        'light-black': '#162522',
        'slate1': '#eff2fa', // Add the bg-light-white" class
        'slate2': '#EFF2F9',
        'light-dark': '#9ca3af',
      },
      textColor: {
        primary: '#ff5a00',
        'slate1': '#eff2fa',
        'light-black': '#162522',
        'light-white': '#F9F9F9', // Add the bg-light-white" class
        'light-white1': '#ECEDF1',
        'light-dark': '#9ca3af',
      },
    },
  },
  plugins: [],
};
