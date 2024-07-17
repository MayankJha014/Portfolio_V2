/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-onyx":
          "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)",
        "gradient-jet":
          "linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)",
        "gradient-yellow-1":
          "linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)",
        "gradient-yellow-2":
          "linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)",
      },
      colors: {
        jet: "hsl(0, 0%, 22%)",
        onyx: "hsl(240, 1%, 17%)",
        "eerie-black-1": "hsl(240, 2%, 13%)",
        "eerie-black-2": "#1e1e1fa3",
        "smoky-black": "hsl(0, 0%, 7%)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "orange-yellow-crayola": "hsl(45, 100%, 72%)",
        "vegas-gold": "hsl(45, 54%, 58%)",
        "light-gray": "hsl(0, 0%, 84%)",
        "light-gray-70": "hsla(0, 0%, 84%, 0.7)",
        "bittersweet-shimmer": "hsl(0, 43%, 51%)",
      },
      borderColor: {
        "gradient-onyx":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
      },
      textColor: {
        "gradient-yellow":
          "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
      },
      boxShadow: {
        "shadow-1": "-4px 8px 24px hsla(0, 0%, 0%, 0.125)",
        "shadow-2": "0 16px 30px hsla(0, 0%, 0%, 0.25)",
        "shadow-3": "0 16px 40px hsla(0, 0%, 0%, 0.25)",
        "shadow-4": "0 25px 50px hsla(0, 0%, 0%, 0.15)",
        "shadow-5": "0 24px 80px hsla(0, 0%, 0%, 0.25)",
      },
    },
  },
  plugins: [],
};
