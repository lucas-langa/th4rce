import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: (!process.env.NODE_ENV || process.env.NODE_ENV === "development") ? "http://localhost:4000/graphql" : "https://young-wave-08967.herokuapp.com/graphql",
    cache: new InMemoryCache()
});

export default client;