module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideToR: "slideToR 500ms linear",
        slideToL: "slideToL 500ms linear",
      },
      keyframes: {
        //프레임 밖 왼쪽에서 현위치로
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        //프레임 밖 오른쪽으로에서 현 위치로
        slideToL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
