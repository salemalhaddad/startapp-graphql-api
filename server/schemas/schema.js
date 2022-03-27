const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Query {
		getAllStartups: [Startup!]!
		getStartupByName(name: String!): Startup!
		getStartupByUUID(uuid: String!): Startup!
		getStartupByType(type: sType!): Startup!
		numberSix: String!
	}

	type Startup {
		# id: Int
		uuid: String!
		name: String!
		website: String!
		type: sType!
		positions: [Position]
		img: String
	}

	type Position {
		title: String
		experience: String
		type: [String]
	}

	type Mutation {
		createStartup(name: String, website: String, type: String, img: String): Startup!
		addPosition(uuid: String, title: String, experience: String, type: [String]): Startup!
		deleteStartup(uuid: String): Startup!
		addImg(uuid: String!, img: String!): Startup!
	}

	enum sType {
		EdTech
		Edtech
		edTech
		edtech
		EDTECH
		FINTECH
		FinTech
		fintech
		finTech
		Consumer Tech
	}
`;

module.exports = { typeDefs }
