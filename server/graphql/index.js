const { GraphQLSchema } = require("graphql");
const graphqlQuery = require("./graphqlQuery");
const graphqlMutation = require("./graphqlMutation");

const query = graphqlQuery;
const mutation = graphqlMutation;

const graphqlSchema = new GraphQLSchema({ query, mutation });

module.exports = graphqlSchema;
