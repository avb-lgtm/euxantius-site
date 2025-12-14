module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  // Define a collection for essays
  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByGlob("essays/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
