const { GraphQLObjectType } = require('graphql')
const deleteUser = require('./mutations/UserType/deleteUser')

const graphqlMutation = new GraphQLObjectType({
	name: 'GraphqlMutation',
	fields:{
		deleteUser,
	}

})


module.exports = graphqlMutation