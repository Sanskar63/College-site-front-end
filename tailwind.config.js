/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'rgba-brown': 'rgba(185, 122, 79, 1)',
        'rgba-dark-brown': 'rgba(107, 58, 17)',
        'rgba-cream': 'rgba(235, 202, 145)',
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
      keyframes: {
        fall: {
          '0%': { 
            transform: 'translateY(-100%)', // Start off-screen
            opacity: '0',                   // Fully transparent
          },
          '100%': { 
            transform: 'translateY(0)',      // End at its original position
            opacity: '1',                    // Fully opaque
          },
        },
      },
      animation: {
        fall: 'fall 0.3s ease-out',// Set duration and easing
      },
    },

    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

