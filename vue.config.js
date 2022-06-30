const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()]
  }
}
