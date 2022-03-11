const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Query {
		getAllStartups: [Startup!]!
		getStartupByName(name: String!): Startup!
		getStartupById(id: Int!): Startup!
		getStartupByType(type: sType!): Startup!
		numberSix: String!
	}

	type Startup {
		id: Int
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
		type: [String]!
	}

	type Mutation {
		createStartup(name: String, website: String, type: String): Startup!
		addPositions(id: Int, positions: String): Startup!
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
	}
`;

module.exports = { typeDefs }
