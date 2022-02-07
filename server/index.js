const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/schema");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);


var port = process.env.PORT || 5555;

app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 5555");
});
