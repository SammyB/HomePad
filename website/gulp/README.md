## Gulp Tasks
Below is a description of the gulp tasks that have been set up in this project.

### Linting - Styles
Linting for `sass/scss` files with some sensible default rules. Changes to configuration can be made in `/.sass-lint.yml`

```
gulp lintStyles
```

### Linting - Scripts
Linting for JavaScript with some sensible default rules. Changes to configuration can be made in `/.eslintrc`

```
gulp lintScripts
```

### Styles
Compiles Sass and then runs auto-prefixer. Sourcemaps are generated when in development. Generated CSS is outputted to `dist/css`. CSS is minified when building for prod.

```
gulp styles:dev || gulp styles:prod
```

### Scripts
Scripts are bundled via Webpack. Webpack is configured to include support for ES2015, with babel transpiling this into ES5 compatible JavaScript. The generated JavaScript is outputted to `dist/js`, and is minified when building for prod.

Third party libraries are bundled into a separate JavaScript file named `vendor.js`. In order to include scripts in this bundle they need to be defined in `/webpack.config.js`.

```
gulp scripts:dev || gulp scripts:prod
```

### Images
Images in the `images` directory are minified via imagemin and outputted into the `dist/images` directory.

```
gulp images
```

### Icons
SVGs placed in the `/src/icons` directory are converted into an icon-font. For example, if you add a file named `arrow.svg` to the icons directory then run `gulp icons`, the new icon-font will be generated, and the icon will be able to be utilised like so `<i class="icon-arrow"></i>`.

The generated icon styles are outputted to `scss/general/_icons.scss`

```
gulp icons
```
Note: This task needs to be manually run whenever new icons have been added.

### Panini
[Panini](http://foundation.zurb.com/sites/docs/panini.html) is a flat file compiler that uses the concepts of templates, pages, and partials—powered by the Handlebars templating language.

HTML files in the `/src/templates/` directory are compiled into a flattened site.

The `templates` directory consists of:

* **`pages`**
Each file in this directory generates a HTML page
* **`layouts`**
A common layout that pages can share
* **`partials`**
Partials allow you to inject HTML anywhere in a page or layout.
* **`helpers`**
Helpers are special functions that manipulate content on the page. In addition to Handlebars's built-in helpers, Panini includes a few custom helpers and you can add your own.

```
gulp panini
```
