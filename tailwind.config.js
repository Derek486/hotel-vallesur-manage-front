/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#1C2434',
      'black-2': '#010101',
      body: '#64748B',
      bodydark: '#AEB7C0',
      bodydark1: '#DEE4EE',
      bodydark2: '#8A99AF',
      bodydark3: '#e8e8e8',
      primary: '#3C50E0',
      secondary: '#80CAEE',
      stroke: '#E2E8F0',
      gray: '#EFF4FB',
      graydark: '#333A48',
      'gray-2': '#F7F9FC',
      'gray-3': '#FAFAFA',
      whiten: '#F1F5F9',
      whiter: '#F5F7FD',
      boxdark: '#24303F',
      'boxdark-2': '#1A222C',
      strokedark: '#2E3A47',
      'form-strokedark': '#3d4d60',
      'form-input': '#1d2a39',
      'meta-1': '#DC3545',
      'meta-2': '#EFF2F7',
      'meta-3': '#10B981',
      'meta-4': '#313D4A',
      'meta-5': '#259AE6',
      'meta-6': '#FFBA00',
      'meta-7': '#FF6766',
      'meta-8': '#F0950C',
      'meta-9': '#E5E7EB',
      success: '#219653',
      danger: '#D34053',
      warning: '#FFA70B',
    },
    boxShadow: {
      default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
      card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
      'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
      'card-3': '0 0 40px #00000038',
      switcher:
        '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
      'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
      1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
      4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
      5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
      7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
      8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
    },
    dropShadow: {
      1: '0px 1px 0px #E2E8F0',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      3: '0px 1px 8px rgba(0, 0, 0, 0.12)',
    },
    keyframes: {
      rotating: {
        '0%, 100%': { transform: 'rotate(360deg)' },
        '50%': { transform: 'rotate(0deg)' },
      },
      spin: {
        'to': { transform: 'rotate(360deg)' },
        'from': { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
      rotating: 'rotating 30s linear infinite',
      'spin-1.5': 'spin 1.5s linear infinite',
      'spin-2': 'spin 2s linear infinite',
      'spin-3': 'spin 3s linear infinite',
    },
    extend: {
      backgroundImage: {
        'background-hotel': "url('/src/assets/background.jpg')",
      }
    }
  },
  plugins: [],
}

