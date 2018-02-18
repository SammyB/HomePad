const webpackConfig = require('./webpack.config');

const PATHS = {
  src     : 'src',
  dist    : 'dist',
  scripts : 'src/js',
  styles  : 'src/scss',
  data    : 'src/data',
  icons   : 'src/icons',
  fonts   : 'src/fonts',
  images  : 'src/images',
  layouts : 'src/templates/layouts',
  pages   : 'src/templates/pages',
  partials: 'src/templates/partials',
  helpers : 'src/templates/helpers'
};

const PANINI = {
  root    : PATHS.pages,
  layouts : PATHS.layouts,
  partials: PATHS.partials,
  data    : PATHS.data,
  helpers : PATHS.helpers
};

module.exports = {
  paths  : PATHS,
  panini : PANINI,
  webpack: {
    dev  : webpackConfig.dev,
    prod : webpackConfig.prod
  },
  sass: {
    dev: {
      outputStyle : 'expanded',
      precision   : 10,
      includePaths: [
        './node_modules',
        './node_modules/foundation-sites/scss'
      ],
      sourcemaps  : true
    },
    prod: {
      outputStyle : 'compressed',
      precision   : 10,
      includePaths: ['./node_modules']
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  },
  imagemin: {
    jpg : 80,
    gif : 3,
    png : 80
  },
  iconFontName: 'isobar'
};
