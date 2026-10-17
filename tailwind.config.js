/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#090D16',
          surface: '#111827',
          elevated: '#1A243D',
          primary: '#0F172A',
          secondary: '#334155',
          accent: '#10B981',
          'accent-hover': '#059669',
          'accent-light': '#064E3B',
          border: '#1E293B',
          'border-hover': '#334155',
          text: {
            heading: '#F8FAFC',
            body: '#E2E8F0',
            muted: '#94A3B8',
            subtle: '#64748B',
          },
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(16, 185, 129, 0.2)',
      },
    },
  },
  plugins: [],
};
