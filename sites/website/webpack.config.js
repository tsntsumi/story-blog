const nodeExternals = require('webpack-node-externals');

module.exports = {
  // target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
   
  resolve: {
     alias: {
       'express-handlebars': 'handlebars/dist/handlebars.js'
     }
  }
}
