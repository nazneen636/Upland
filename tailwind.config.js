/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      grotesque: ["'Darker Grotesque'", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#FF6231",
        foreground: "#fff801",
      },
      backgroundImage: {
        bannerBg1: "url('/banner/bg1.png')",
        bannerBg2: "url('/banner/bg2.png')",
        footerBg: "url('/banner/bg3.png')",
        freeTrialBg: "url('/banner/bg4.png')",
        trialPopUp: "url('/home/trialPopUpBG.png')",
      },
    },
  },
  plugins: [],
};
