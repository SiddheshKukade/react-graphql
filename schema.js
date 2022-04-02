const { GraphQLSchema } = require("graphql");
const graphql = require("grphql");

// creating our graph
const { GraphQLObjectType, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

//defining root queries inside the schema

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get database from db or other API
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery
});
