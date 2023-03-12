module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/auth': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
    }
  }
}
