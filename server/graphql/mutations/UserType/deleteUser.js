const UserType = require("../../types/UserType");
const {userList} = require("../../data");
const { GraphQLID } = require("graphql");

const deleteUser = {
	type: UserType,
	args: {
		id: { type: GraphQLID },
	},
	resolve(parent, args) {
		return userList.find(user => user.id === +args.id);
	},
};

module.exports = deleteUser