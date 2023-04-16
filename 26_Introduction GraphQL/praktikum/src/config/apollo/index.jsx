import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://prime-flea-29.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "tsYLrtTiNS1AJARvanMXaAHysO4QiDAjppEg1SvVhfss4qCCDGfKmOH5ou4YiL3V",
    },
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
