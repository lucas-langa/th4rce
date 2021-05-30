import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: (!process.env.NODE_ENV || process.env.NODE_ENV === "development") ? "http://localhost:4000/graphql" : process.env.REACT_APP_GRAPHQL_SERVER_URL,
    cache: new InMemoryCache()
});

export default client;