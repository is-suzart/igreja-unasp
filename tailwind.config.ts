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
    {
      pattern: /^text-(red|slate|stone|orange|amber|lime|emerald|sky|violet|purple|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover']
    },
    // Cores de background
    {
      pattern: /^bg-(red|slate|stone|orange|amber|lime|emerald|sky|violet|purple|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover']
    },
    // Cores de borda
    {
      pattern: /^border-(red|slate|stone|orange|amber|lime|emerald|sky|violet|purple|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover']
    },
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9',
    'w-100%','w-200%','w-300%','w-400%','w-500%','w-600%','w-700%','w-800%','w-900%'
    
    
  ]
};
export default config;
