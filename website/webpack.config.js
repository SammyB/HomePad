const webpack = require('webpack');

const base = {
  entry: {
    main: './src/js/main',
    vendor: [
      'es6-promise/auto',
      'jquery',
      'foundation-sites/dist/js/foundation.min.js',
      'lodash',
      'lory.js',
      'hammerjs',
      'aos',
      'fullpage.js',
      'js-cookie',
      'object-fit-images',
    ]
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'aos': 'aos/dist/aos.js',
      'fullpagejs': 'fullpage.js/dist/jquery.fullpage.js',
    }
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test   : /\.js$/,
        loader : 'babel-loader'
      },
    ]
  }
};

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
  //new BundleAnalyzerPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  })
];

const dev = Object.assign({}, base, {
  plugins: [].concat(plugins)
});

const prod = Object.assign({}, base,  {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ].concat(plugins).reverse(),
  stats: {
    assets: false
  }
});

module.exports = {
  dev : dev,
  prod: prod
};
