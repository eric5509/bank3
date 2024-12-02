import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontSize:{
      9: "9px",
      10: "10px",
      11: "11px",
      13: "13px",
      15: "15px",
      17: "19px",
      19: "19px",
     }
    },
  },
  plugins: [],
} satisfies Config;
