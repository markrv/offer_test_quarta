// const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
      proxy: {
        '/api*': {
          target: 'http://localhost:8000/',
        }
      }
    }
  }
