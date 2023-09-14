/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    listStyleType: {
      heavy_rightwards_arrow: "\" \\2799  \"",
      shadowed_white_circle: "\"\\274D  \"",
      triangle: "\"\\293F  \"",
      none: 'none',
    },
    extend: {
      fontFamily: {
        'wenkai': ['Fira Code', 'LXGW WenKai Lite'],
      },
    },
    plugins: [],
  }
}