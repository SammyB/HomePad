const panini =            require('panini');
const config =            require('../config');

module.exports = (gulp) => {
  return () => {
    panini.refresh();
    return gulp.src(`${config.paths.pages}/**/*.html`)
      .pipe(panini(config.panini))
      .pipe(gulp.dest(config.paths.dist));
  };
};
