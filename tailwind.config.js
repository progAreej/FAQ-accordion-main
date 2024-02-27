/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "one":"url('./assets/images/background-pattern-desktop.svg')",
      },
      textColor:{
        "Light-pink": "hsl(275, 100%,80%)",
        "Grayish-purple":" hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)",
      },
      fontFamily:{
        "f1":"Work Sans",
      },
      height:{
        "800":"600px"

      },
      width:{
        "600":"600px",
        "400":"400px",
        "300":"300px"
      },
      backgroundSize:{
        "100":"50px"
      }
    },
  },
  plugins: [],
}

