// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "graphql-app",
      url: "https://hasura-dash.herokuapp.com/v1/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
