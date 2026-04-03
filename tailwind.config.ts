import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:        theme.colors.primary,
          primaryLight:   theme.colors.primaryLight,
          primaryBg:      theme.colors.primaryBg,
          secondary:      theme.colors.secondary,
          secondaryLight: theme.colors.secondaryLight,
          accent:         theme.colors.accent,
          textDark:       theme.colors.textDark,
          textMuted:      theme.colors.textMuted,
          bgAlt:          theme.colors.bgAlt,
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
