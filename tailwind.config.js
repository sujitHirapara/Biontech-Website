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
      colors: ({ colors }) => ({
          inherit: colors.inherit,
          current: colors.current,
          transparent: colors.transparent,
          black: colors.black,
          white: colors.white,
          slate: colors.slate,
          gray: colors.gray,
          zinc: colors.zinc,
          neutral: colors.neutral,
          stone: colors.stone,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          // custom
          current: 'currentColor',
          // 'danger': '#EA0000',
          // 'warning': '#F4CB00',
          'success': '#78BF84',
          'info': '#E67C7D',
          primary: '#A81E31',
          secondary: '#fde08a',
      }),
      dropShadow: {
        'card' : '5px 5px 20px rgba(129, 99, 214, 0.06)',
        'card-2' : '2px 30px 50px rgba(11, 36, 74, 0.1)'
      }
    },
  },
  plugins: [],
}
