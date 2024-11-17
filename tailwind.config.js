/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  script: {
    build: "tailwindcss -i ./src/input.css -o ./src/output.css --watch"
}
}

