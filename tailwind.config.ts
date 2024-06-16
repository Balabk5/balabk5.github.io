import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      colors: {
        dark: '#050D20', // Add your dark theme color here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize:{
        'text-xs':'.25rem',
        'text-sm':'.5rem',
        'text-base':'.75rem',
        'text-lg	':'1rem',
        'text-xl	':'1.25rem',
        'text-2xl	':'1.5rem',
        'text-3xl	':'2rem',
        'text-4xl	':'2.5rem',
        'text-5xl	':'3rem',
        'text-6xl	':'3.5rem',
        'text-7xl	':'4rem',
        'text-8xl	':'4.5rem',
        'text-9xl	':'5rem',
      }
    },
  },
  plugins: [],
};
export default config;
