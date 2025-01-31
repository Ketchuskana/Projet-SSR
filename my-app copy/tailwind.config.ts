import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'nunito-sans': ['var(--font-nunito-sans)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'sans-serif'],
        'quicksand': ['var(--font-quicksand)', 'sans-serif'],
        'barlow': ['var(--font-barlow)', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
