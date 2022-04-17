const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily["serif"]],
    },
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      boxShadow: {
        navbar: "3px -10px 20px rgba(0,0,0,0.2)",
        flag: "1px 1px 5px rgba(0,0,0,0.3)",
        button: "2px 2px 5px rgba(0,0,0,0.6)",
        achievement: "0px 12px 31px rgba(211,211,211,0.220744)",
        servicebox: " 3px 3px 21px rgba(0,0,0,0.0426574)",
        itemnomal: "0px 2px 11px rgba(0,0,0,.0851453)",
        newitemfooter: "0px 5px 9px rgba(0, 0, 0, 0.0821728)",
        colorbutton: "0px 5px 7px rgba(11,40,88,.119154)",
        slideritem: "3px 3px 3px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
