const htmlmin = require('html-minifier')
const now = String(Date.now())
const Image = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");
const site = require('./src/_data/site');

/**
 * Prefixes the given URL with the site's base URL.
 * @param {string} url
 */
const toAbsoluteUrl = (url) => new URL(url, site.baseUrl).href;

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg", "jpg", "png"],
    useCache: true
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

function htmlMinifier(content, outputPath) {
  if (
    process.env.ELEVENTY_ENV === "production" &&
    outputPath &&
    outputPath.endsWith('.html')
  ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    })
    return minified;
  }

  return content;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./assets/styles/tailwind.config.js');
  eleventyConfig.addWatchTarget('./assets/styles/tailwind.css');
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './assets/styles/style.css' });
  eleventyConfig.addShortcode('version', () => now);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addTransform('htmlmin', htmlMinifier);

  eleventyConfig.addPassthroughCopy("assets");
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.addFilter("published", (articles) => {
    return articles.filter(article => article && article.data.draft === false)
  });

  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts:  '_includes/layouts',
    }
  };
};