/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-lightningcss': {
      browsers: '>= .25%'
    },
    autoprefixer: {},

  }
};

export default config;
