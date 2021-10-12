import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://hasura-dash.herokuapp.com/v1/graphql",
});
