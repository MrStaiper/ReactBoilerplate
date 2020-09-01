'use-strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
// eslint-disable-next-line consistent-return
}).listen(3000, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }
  // eslint-disable-next-line no-console
  console.log('Listening on http://localhost:3000');
});
