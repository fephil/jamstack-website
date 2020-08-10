
// Import filters
// TBA

// Import transforms
// TBA

// Import data files
const site = require('./src/_data/site.json');

module.exports = function(config) {
  // Filters
  // TBA

  // Layout Aliases
  config.addLayoutAlias('base', 'layouts/base.njk');

  // Transforms
  // TBA

  // Assets
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');

  // Collections
  // TBA

  // Plugins
  // TBA

  return {
    dir: {
      input: 'src',
      output: '_dist',
      data: '_data',
      includes: '_includes'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};
