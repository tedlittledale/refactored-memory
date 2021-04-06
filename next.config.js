const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["webdev-exercise.netlify.com"]
  },
  pwa: {
    dest: "public"
  }
});
