module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ['./src/**/*.{js,jsx}'],

  theme: {
    extend: {
      screens: {
        sm: null,
        md: '768px',
        lg: '1140px',
        xl: null,
      },

      colors: {
        black: {
          default: '#000',
          1: '#222',
        },

        gray: {
          1: '#eee',
          2: '#ddd',
          3: '#ccc',
          4: '#c6c6c6',
          5: '#888',
          6: '#808080',
        },

        orange: {
          default: '#ff8b60',
        },

        blue: {
          default: '#369',
          1: '#0000ff',
        },

        purple: {
          default: '#551a8b',
          1: '#9494ff',
        },
      },

      fontSize: {
        'xs': '1rem', // 10px
        'sm': '1.1rem', // 11px
        'base': '1.2rem', // 12px
        'lg': '1.3rem', // 13px
        '2xl': '1.4rem', // 14px
        '3xl': '1.6rem', // 16px
        '4xl': '1.8rem', // 18px
      },
    },
  },

  variants: {},

  plugins: [],
};
