const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const withFonts  = require('next-fonts');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [withSass, {
    cssModules: false,
    postcssLoaderOptions: {
      parser: true
    },
    target: 'server'
  }],
  [withImages],
  [withFonts, {
    enableSvg:true
  }]
]);
