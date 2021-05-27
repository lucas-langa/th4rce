const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');
const ForceAPI = require('./datasources/ForceAPI');
const Query = require('./resolvers/Query');
const resolvers = {
    Query,
};
const express = require('express');
const app = express();
const buildPath = path.join(__dirname,'..','..','build');
app.use(express.static(buildPath))
// app.get('/', (_req, res) => {
//     res.sendFile(path.resolve(__dirname, '..','..','build','index.html'))
// });

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
// server.listen({ port: process.env.PORT || 4000 }).then(({url})=>{
//     console.log(`server is running!, listening on port ${url}`,);
// });