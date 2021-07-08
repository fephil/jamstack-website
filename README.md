# jamstack-website

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/fephil/jamstack-website?include_prereleases) [![GitHub license](https://img.shields.io/github/license/fephil/jamstack-website)](https://github.com/fephil/jamstack-website/blob/main/LICENSE)

**An opinionated workflow for building modern Jamstack (static) websites**

- Author: [Phil Lennon](https://phil.dev)
- Source: [github.com/fephil/jamstack-website](https://github.com/fephil/jamstack-website)
- Issues and Suggestions: [github.com/fephil/jamstack-website/issues](https://github.com/fephil/jamstack-website/issues)
- Twitter: [@frontendphil](https://twitter.com/frontendphil)
- Email: [enquiry@phil.dev](mailto:enquiry@phil.dev)
- Trello Life List [http://bit.ly/life-list](http://bit.ly/life-list)

---

## About

jamstack-website is a deliberately minimal workflow designed to quickly build a static website using the latest modern techniques and technologies in Frontend development. It is _very_ fast. Use this as a base, fork it and tailor to your specific needs.

This workflow contains:

- Eleventy
- Esbuild
- Postcss
- Tailwind
- Eslint
- Prettier

This workflow isn't designed for use as a single page app architecture such as Vue.js, however you can use javascript to augment pages if needed.

Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/fephil/jamstack-website/issues) for more information about future enhancements and changes.

## Requirements

- Node 14 LTS or Node 16
- NPM 7 (however, if package-lock.json is deleted, Yarn or NPM 6 can be used)

### Optional Requirements

In your code editor of choice, the following plugins are recommended but not required. Please note the plugin names might be slightly different depending on your editor. Installing these plugins will help keep a consistent code structure in your project.

- editorconfig,
- eslint,
- prettier,

## Usage

You can run the following tasks in your terminal:

`npm run develop`

This tasks builds the project, enables the website to be viewed in your web browser and will automatically reload when files change.

`npm run build`

This tasks builds the project, checks the javascript for errors, minifies all files and produces a folder (\_site) ready for deployment.

## Licence

MIT
