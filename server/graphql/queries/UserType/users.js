const UserType = require("../../types/UserType");
const { GraphQLList } = require("graphql");
const {userList} = require("../../data")

const users = {
  type: new GraphQLList(UserType),
	resolve(parent, args) {
		return userList
	},
};

module.exports = users