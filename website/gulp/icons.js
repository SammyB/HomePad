'use strict';

const browserSync =       require('browser-sync');
const config =            require('../config');
const handleError =       require('./handleError');

module.exports = (gulp, $) => {
  let fontName = config.iconFontName;
  return () => {
    return gulp.src([`${config.paths.icons}/*.svg`], {'base': `${config.paths.src}`})
      .pipe($.iconfontCss({
        fontName: fontName,
        path: `${config.paths.styles}/general/_template-icons.scss`,
        targetPath: '../../scss/general/_icons.scss',
        fontPath: `/fonts/${fontName}`
      }))
      .pipe($.iconfont({
        fontName: fontName,
        formats: ['woff', 'ttf', 'svg'],
        normalize: true
      }))
      .on('error', handleError)
      .pipe(gulp.dest(`${config.paths.fonts}/${fontName}`))
      .pipe(browserSync.reload({stream: true}));
  };
};
