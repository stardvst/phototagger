module.exports = {
  resolve: {
    fallback: {
      fs: 'empty',
      Buffer: false,
      http: false,
      https: false,
      zlib: false,
      url: false,
    },
  },
  module: {
    unknownContextCritical: false,
  },
};
