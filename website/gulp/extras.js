const config =            require('../config');

module.exports = (gulp) => {
  return () => {
    return gulp.src([
      `${config.paths.fonts}/**/*`,
      'src/audio/**/*',
      'src/data/**/*',
      `${config.paths.src}/*.{ico,txt,png,config,html,php}`
    ], {'base': `${config.paths.src}`})
      .pipe(gulp.dest(`${config.paths.dist}/`));
  };
};
