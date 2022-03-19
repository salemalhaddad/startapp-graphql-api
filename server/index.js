const express = require("express");
const app = express();
const { resolvers } = require("./schemas/resolver");
const { typeDefs } = require("./schemas/schema");
const { ApolloServer } = require('apollo-server');
const { DataStore } = require('notarealdb')
const { startups } = require("./db");
const jsonFile = require("./data/startups.json")
// app.use(cors());
// app.use(express.json());
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
// 	rootValue: resolvers
//   })
// );

const server = new ApolloServer({ typeDefs, resolvers });
// Launch the server
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});



// var port = process.env.PORT || 5555;

// app.listen(port, "0.0.0.0", function() {
// console.log("Listening on Port 5555");
// });
