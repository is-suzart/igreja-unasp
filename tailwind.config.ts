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
  plugins: [],
  safelist: [
    'text-perigo', 'text-perigo-hover', 'bg-perigo', 'bg-perigo-hover', 'border-perigo', 'border-perigo-hover',
    'text-sucesso', 'text-sucesso-hover', 'bg-sucesso', 'bg-sucesso-hover', 'border-sucesso', 'border-sucesso-hover',
    'text-aviso', 'text-aviso-hover', 'bg-aviso', 'bg-aviso-hover', 'border-aviso', 'border-aviso-hover',
    'text-link', 'text-link-hover', 'bg-link', 'bg-link-hover', 'border-link', 'border-link-hover',
    'text-escuro', 'text-escuro-hover', 'bg-escuro', 'bg-escuro-hover', 'border-escuro', 'border-escuro-hover',
    'text-claro', 'text-claro-hover', 'bg-claro', 'bg-claro-hover', 'border-claro', 'border-claro-hover',
    
    
  ]
};
export default config;
