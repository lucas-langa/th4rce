const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const ForceAPI = require('./datasources/ForceAPI');
const Query = require('./resolvers/Query');
const resolvers = {
    Query,
};

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

server.listen().then(()=>{
    console.log(`server is running!, listening on port 4000`);
});