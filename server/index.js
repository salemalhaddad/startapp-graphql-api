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
server.listen().then(({ url }) => {
	// console.log(startups.entities)
	console.log(`🚀  Server ready at ${url}`);
});


// var port = process.env.PORT || 5555;

// app.listen(port, "0.0.0.0", function() {
// console.log("Listening on Port 5555");
// });
