const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');
const ForceAPI = require('./datasources/ForceAPI');
const Query = require('./resolvers/Query');
const cors = require('cors');
const resolvers = {
    Query,
};
const express = require('express');
const app = express();
const buildPath = path.join(__dirname,'..','..','build');

app.use(cors());
app.use(express.static(buildPath))

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    dataSources: () => ({
        ForceAPI: new ForceAPI()
    }),
    playground: false
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 },()=>{
    console.log(`Accepting connections at ${server.graphqlPath}`);
})
