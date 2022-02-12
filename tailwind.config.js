module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inconsolata: 'Inconsolata',
        'space-mono': 'Space Mono',
      },
      colors: {
        gray: {
          75: '#BDBDBD',
          425: '#4F4F4F',
          950: '#333333',
        },
      },
      maxHeight: {
        90: '23rem',
        54: '13.2rem',
      },
      maxWidth: {
        mobile: '16rem',
      },
      minWidth: {
        desktop: '30rem',
      },
    },
  },
  plugins: [],
};
