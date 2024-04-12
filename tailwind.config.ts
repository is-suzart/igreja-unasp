import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '100%': '100%',
        '200%': '200%',
        '300%': '300%',
        '400%': '400%',
        '500%': '500%',
        '600%': '600%',
        '700%': '700%',
        '800%': '800%',
        '900%': '900%',
      },
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
          DEFAULT: '#ffffff',
          hover: '#f4f4f4',
          light: '#fff'
        }
      
      },
    },
    },
  plugins: [],
  safelist: [
    'text-perigo', 'text-perigo-hover', 'hover:text-perigo-hover', 'hover:bg-perigo-hover', 'hover:bg-perigo', 'hover:border-perigo-hover', 'bg-perigo', 'bg-perigo-hover', 'border-perigo', 'border-perigo-hover',
    'text-sucesso', 'text-sucesso-hover', 'hover:text-sucesso-hover', 'hover:bg-sucesso-hover', 'hover:bg-sucesso', 'hover:border-sucesso-hover', 'bg-sucesso', 'bg-sucesso-hover', 'border-sucesso', 'border-sucesso-hover',
    'text-aviso', 'text-aviso-hover', 'hover:text-aviso-hover', 'hover:bg-aviso-hover', 'hover:bg-aviso', 'hover:border-aviso-hover', 'bg-aviso', 'bg-aviso-hover', 'border-aviso', 'border-aviso-hover',
    'text-link', 'text-link-hover', 'hover:text-link-hover', 'hover:bg-link-hover', 'hover:bg-link', 'hover:border-link-hover', 'bg-link', 'bg-link-hover', 'border-link', 'border-link-hover',
    'text-escuro', 'text-escuro-hover', 'hover:text-escuro-hover', 'hover:bg-escuro-hover', 'hover:bg-escuro', 'hover:border-escuro-hover', 'bg-escuro', 'bg-escuro-hover', 'border-escuro', 'border-escuro-hover',
    'text-claro', 'text-claro-hover', 'hover:text-claro-hover', 'hover:bg-claro-hover', 'hover:bg-claro', 'hover:border-claro-hover', 'bg-claro', 'bg-claro-hover', 'border-claro', 'border-claro-hover',
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9',
    'w-100%','w-200%','w-300%','w-400%','w-500%','w-600%','w-700%','w-800%','w-900%'
    
    
  ]
};
export default config;
