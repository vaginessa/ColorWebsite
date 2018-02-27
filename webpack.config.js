const path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  }
}
