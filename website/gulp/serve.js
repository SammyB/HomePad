'use strict';

const runSequence =       require('run-sequence');
const browserSync =       require('browser-sync');
const config =            require('../config');
const ngrok =             require('ngrok');
// const proxyMiddleware =   require('http-proxy-middleware');
//
// const proxy = proxyMiddleware(['/END_POINT_HERE'], {
//   changeOrigin  : true,
//   logLevel      : 'debug',
//   target        : 'http://example.com',
// });

const tunnel = (error, bsync) => {
  ngrok.connect(bsync.options.get('port'), (_e, url) => {
    console.log(`[NGROK] Started at: ${url}`);
  });
};

module.exports = (gulp, options) => {
  // intermediary to reload browser on hbs html change
  gulp.task('hbs-watch', ['panini'], (done) => {
    browserSync.reload();
    done();
  });

  return () => {
    runSequence(['clean'], [`styles:${options.env}`, `scripts:${options.env}`, 'panini', 'extras', 'images'], () => {
      browserSync({
        startPath: '/',
        notify: false,
        port: 3000,
        server: {
          baseDir: [config.paths.dist],
          routes: {},
          // config for api proxy above
          // middleware: [proxy]
        }
      },
      tunnel);

      gulp.watch([`${config.paths.src}/images/**/*`]).on('change', browserSync.reload);
      gulp.watch([
        `${config.paths.data}/**/*`,
        `${config.paths.src}/templates/**/*`
      ], ['hbs-watch', 'extras']);
      gulp.watch(`${config.paths.styles}/**/*.scss`, [ 'lintStyles', `styles:${options.env}`]);
      gulp.watch(`${config.paths.scripts}/**/*`, ['lintScripts', `scripts:${options.env}`]);
    });
  };
};
