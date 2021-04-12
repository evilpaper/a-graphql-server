const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();

// Dummy schema to try setup
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "Hello World" },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.write("Hello mate! Goto localhost:5000/graphql to continue.");
  res.end();
});

app.listen(5000, () => console.log("Server is running"));
