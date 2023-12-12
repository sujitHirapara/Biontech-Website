module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // md: '1.5rem',
      },
    },
    extend: {
      colors: {  
          // custom
          current: 'currentColor',
          // 'danger': '#EA0000',
          // 'warning': '#F4CB00',
          'success': '#78BF84',
          'info': '#E67C7D',
          primary: '#A81E31',
          secondary: '#fde08a',
          gray: {
            DEFAULT: "#999999",
            "light": "#E6E6E6",
            "dark": "#CCCCCC",
          }
      },
      dropShadow: {
        'card' : '5px 5px 20px rgba(129, 99, 214, 0.06)',
        'card-2' : '2px 30px 50px rgba(11, 36, 74, 0.1)'
      }
    },
  },
  plugins: [],
}
