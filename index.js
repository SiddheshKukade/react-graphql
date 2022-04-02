// Creating a Graph-QL Server
const express = require("express");
// the express graph ql allows express to understand graphql
const graphHTTP = require("express-graphql");

const app = express();

app.use("/graphql", graphHTTP({}));

app.listen(4000, () => {
  console.log("yo lo ");
});
