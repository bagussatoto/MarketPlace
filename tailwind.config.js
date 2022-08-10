module.exports = {
  purge: [
	'./src/**/*.html',
	'./src/**/*.vue',
	'./src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '.65rem',
        'xxxs': '.55rem'
      },
      width: {
        '5.5/12': '46%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
