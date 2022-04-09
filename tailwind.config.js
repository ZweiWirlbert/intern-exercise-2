const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily["serif"]],
    },
    extend: {
      boxShadow: {
        navbar: "3px -10px 20px rgba(0,0,0,0.2)",
        flag: "1px 1px 5px rgba(0,0,0,0.3)",
        button: "2px 2px 5px rgba(0,0,0,0.6)",
        achievement: "0px 12px 31px rgba(211,211,211,0.220744)",
      },
    },
  },
  plugins: [],
};
