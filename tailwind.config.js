/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/*.html'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      inter: ['Inter'],
      rubik: ['Rubik'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
