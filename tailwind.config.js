module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      magnolia: '#f5f5ff',
      seaGreen: '#29f3c3',
      darkGreen: '#285850',
      grey: '#272729',
      shadowGrey: '#3B3B41',
      lightGrey: '#7A7C80',
    }, 
    fontFamily: {
      'serif': ['ui-serif', 'Prompt']
    },
    extend: {},
  },
  plugins: [],
}
