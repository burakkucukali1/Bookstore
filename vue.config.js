module.exports = {
  transpileDependencies: ['vuex-persist']
}


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Bookstore/'
    : '/'
}