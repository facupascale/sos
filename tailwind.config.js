// The code is correct. It is a valid JSDoc comment that specifies the type of the Tailwind CSS configuration object.

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      'custom-primary': '#2c282a',
      'custom-pDarker': '#1b1719',
      'custom-grey': '#828282',
      'custom-black': '#000',
      'custom-white': '#fff',
      'custom-green': '#2ecc71',
      'custom-red': '#e74c3c',
      'custom-yellow': '#f1c40f',
      'custom-violet': '#9b59b6',
    },
    fontFamily: {
      'roboto-medium': ['Roboto-Medium'],
      'roboto-mediumItalic': ['Roboto-MediumItalic'],
    },
  },
  plugins: [],
}
