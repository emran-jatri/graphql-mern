const express = require('express');
const router = express.Router()
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('../graphql');


router.use("/graphql", graphqlHTTP({
	schema: graphqlSchema,
	graphiql: true,
}))

module.exports = router