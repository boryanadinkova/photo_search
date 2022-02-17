module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    screens: {
      sm: '620px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    fontFamily: {
      serif: 'Roboto Serif, sans-serif',
      sans: 'Balsamiq Sans, cursive',
      cursive: 'Satisfy, cursive',
    },
    //     font-family: 'Balsamiq Sans', cursive;
    // font-family: 'Roboto Serif', sans-serif;
    // font-family: 'Satisfy', cursive;
  },
  plugins: [],
};
