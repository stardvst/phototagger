module.exports = {
  resolve: {
    fallback: {
      fs: 'empty',
      Buffer: 'empty',
      http: 'empty',
      https: 'empty',
      zlib: 'empty',
    },
  },
  module: {
    unknownContextCritical: false,
  },
};
