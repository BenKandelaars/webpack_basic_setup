const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',       
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: path.resolve(__dirname, './myModule/index.js'),
            options: {}
          }
        ]
      }
    ]
  }
};
