const mix = require('laravel-mix');
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const postcssCustomMedia = require('postcss-custom-media');
require('laravel-mix-stylelint');
require('laravel-mix-eslint');
const sourcesPath = path.resolve('src');
const outputPath = mix.inProduction() ? 'dist' : 'public';

const copyFiles = `${sourcesPath}/*.{html,php,css,png,jpg,gif,svg,woff,woff2,eot,ttf,txt,md,pdf,webm,mp4,ico}`;
const copyImgFiles = `${sourcesPath}/img`;
const copyFontsFiles = `${sourcesPath}/fonts`;
const copyCssFiles = `${sourcesPath}/css`;
const copyJSFiles = `${sourcesPath}/js/plugin`;

mix.autoload({
  jquery: ['$', 'jQuery']
});

mix.copy(copyFiles, outputPath);
mix.copyDirectory(copyImgFiles, `${outputPath}/img`);
mix.copyDirectory(copyFontsFiles, `${outputPath}/fonts`);
mix.copyDirectory(copyCssFiles, `${outputPath}/css`);
mix.copyDirectory(copyJSFiles, `${outputPath}/js`);

mix
  .setPublicPath(outputPath)
  .sass(`${sourcesPath}/scss/style.scss`, `${outputPath}/css`)
  .js(`${sourcesPath}/js/main.js`, `${outputPath}/js`)
  .stylelint({
    configFile: path.resolve('.stylelintrc'),
    context: './src'
  })
  .eslint({
    fix: false,
    cache: false
  });

mix.options({
  cache: true,
  keepalive: true,
  processCssUrls: false,
  postCss: [
    autoprefixer,
    postcssCustomMedia,
    cssMqpacker({
      sort: true
    })
  ],
  clearConsole: true
});

if (mix.inProduction()) {
  mix.options({
    cache: false,
    postCss: [
      require('csswring')({
        removeAllComments: false
      })
    ]
  });
} else {
  mix
    .sourceMaps()
    .webpackConfig({
      devtool: 'inline-source-map'
    });
}

mix.disableNotifications();
