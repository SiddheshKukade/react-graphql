// Creating a Graph-QL Server
const express = require("express");
// the express graph ql allows express to understand graphql
const graphHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use("/graphql", graphHTTP({ schema }));

app.listen(4000, () => {
  console.log("yo lo ");
});
