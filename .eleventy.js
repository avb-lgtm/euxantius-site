module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByGlob("essays/*/index.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
