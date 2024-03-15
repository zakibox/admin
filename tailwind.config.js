module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      colors: {
        primary: {
          100: "#efcfd1",
          200: "#df9fa3",
          300: "#ce6e75",
          400: "#be3e47",
          500: "#ae0e19",
          600: "#8b0b14",
          700: "#68080f",
          800: "#46060a",
          900: "#230305",
        }
      },

    },
  },
  plugins: [require("preline/plugin")
  // require("@preline/dropdown")
  ],
};
