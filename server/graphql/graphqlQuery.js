const { GraphQLObjectType } = require('graphql')
const users = require('./queries/UserType/users')

const graphqlQuery = new GraphQLObjectType({
	name: 'GraphqlQuery',
	fields: {
		users,
	}

})

module.exports = graphqlQuery