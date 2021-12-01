const CracoSwcPlugin = require('craco-swc');

// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss'),
        // eslint-disable-next-line global-require
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es5',
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: false,
              dynamicImport: true,
            },
          },
        },
      },
    },
  ],
};
