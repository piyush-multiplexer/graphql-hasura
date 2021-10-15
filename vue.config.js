module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "GraphQL Apollo Client +  Vue with Hasura Backend";
      return args;
    });
  },
};
