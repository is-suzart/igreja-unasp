import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        perigo: {
          DEFAULT: '#FF6868',
          hover: '#FF4D4D',
          light: '#FFA5A5',
        },
        sucesso: {
          DEFAULT: '#A6C564',
          hover: '#8EB25E',
          light: '#C2D78F',
        },
        aviso: {
          DEFAULT: '#FFD76B',
          hover: '#FFCC5D',
          light: '#FFE8A8',
        },
        link: {
          DEFAULT: '#7C75FF',
          hover: '#6B64E5',
          light: '#E2E1FF',
        },
        escuro: {
          DEFAULT: '#222222',
          hover: '#333333',
          light: '#444444',
        },
        claro: {
          DEFAULT: '#f2f2f2',
          hover: '#f4f4f4',
          light: '#fff'
        }
      
      },
    },
    },
  plugins: []
};
export default config;
