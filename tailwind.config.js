module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#FFDCC0",
        softGray: "rgb(240, 240, 240)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slide-left-right': 'slide-left-right 3s ease-in-out infinite',
      },
      keyframes: {
        'slide-left-right': {
          '0%': { left: '0' },
          '50%': { left: 'calc(100% - 1rem)' },
          '100%': { left: '0' },
        },
      },
    },
  },
};
