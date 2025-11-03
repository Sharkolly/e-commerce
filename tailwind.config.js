// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB'
      }
    },
  },
  plugins: [],
}
