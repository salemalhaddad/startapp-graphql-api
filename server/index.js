const express = require("express");
const app = express();
// const { ApolloServer } = require('apollo-server');
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/schema");
const cors = require("cors");
const startupData = require("./startups-db.json");
const { root } = require('./schemas/resolvers')

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
	rootValue: root,
    schema: schema,
    graphiql: true,
  })
);

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources: () => ({
// 	  startupData
//   })
// });


var port = process.env.PORT || 5555;

app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 5555");
});
