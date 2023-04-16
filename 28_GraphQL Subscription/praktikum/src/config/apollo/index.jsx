// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import

// const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://prime-flea-29.hasura.app/v1/graphql",
//     headers: {
//       "x-hasura-admin-secret":
//         "tsYLrtTiNS1AJARvanMXaAHysO4QiDAjppEg1SvVhfss4qCCDGfKmOH5ou4YiL3V",
//     },
//   }),
//   cache: new InMemoryCache(),
// });

// export default apolloClient;

import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://prime-flea-29.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "tsYLrtTiNS1AJARvanMXaAHysO4QiDAjppEg1SvVhfss4qCCDGfKmOH5ou4YiL3V",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://prime-flea-29.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "tsYLrtTiNS1AJARvanMXaAHysO4QiDAjppEg1SvVhfss4qCCDGfKmOH5ou4YiL3V",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
