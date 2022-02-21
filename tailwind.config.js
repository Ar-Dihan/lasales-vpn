module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend: {
    colors: {
      // Configure your color palette here
      "igoo": "#0B132A",
      "reddi": "#F53838",
      "gray": "#6b7280",
      "white": "#FFFFFF"
    },
    fontFamily:{
      body: ["Rubik"]
    },
    lineHeight: {
      'extra-loose': '90px',
      'sm-loose': '24px'
    },
   },
  },
  plugins: [],
}
