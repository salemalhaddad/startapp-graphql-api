const express = require("express");
const app = express();
const { resolvers } = require("./schemas/resolver");
const { typeDefs } = require("./schemas/schema");
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

// Launch the server
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
