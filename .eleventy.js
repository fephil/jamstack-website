
const htmlmin = require('html-minifier');

const isProduction = process.env.ELEVENTY_ENV === 'production';

module.exports = function(config) {
  // Layout Aliases
  config.addLayoutAlias('base', 'layouts/base.njk');

  // Transforms
  config.addTransform('htmlmin', function(content, outputPath) {
    if ( outputPath.endsWith('.html') && isProduction ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });

  // Assets
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy({ 'public': '/' });

  // Shortcodes
  config.addNunjucksShortcode('test', function(item) {
    return `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">${item}</span>`;
  });

  // Filters
  // TBA

  // Collections
  // TBA

  // Plugins
  // TBA

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
      includes: '_includes'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};
