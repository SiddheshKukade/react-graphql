// Creating a Graph-QL Server
const express = require("express");
// the express graph ql allows express to understand graphql
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("yo lo ");
});
