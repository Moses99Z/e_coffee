module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        chivo: ["Chivo", "sans-serif"],
      },
      colors: {
        darker: "#202022",
        darkblack: "#28282B",
        verydark: "#161618",
        whito: "#d7e1ec",
        teal: "#008B8B",
        teal2: "#008080",
        darkteal: "#016161",
        mid1: "#232526",
        mid2: "#414345",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        transform: "tr 1s ease-in-out infinite",
        fastwiggle: "wiggle 0.8s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        tr: {
          "0%, 100 %": { transform: "translate(0px)" },
          "50%": { transform: "translate(50px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
