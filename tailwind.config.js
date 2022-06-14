module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideFromL: "slideFromL 500ms linear",
        slideFromR: "slideFromR 500ms linear",
      },
      keyframes: {
        //프레임 밖 왼쪽에서 현위치로
        slideFromL: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        //프레임 밖 오른쪽으로에서 현 위치로
        slideFromR: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
