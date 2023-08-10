/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'wenkai': ['Fira Code', 'LXGW WenKai Lite'],
      },
    },
    plugins: [],
  }
}