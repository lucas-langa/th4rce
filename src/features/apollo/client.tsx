import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.APOLLO_SERVER,
    cache: new InMemoryCache()
});

export default client;