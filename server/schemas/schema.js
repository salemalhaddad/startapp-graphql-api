var { buildSchema } = require('graphql');


var schema = buildSchema(`
	type Query {
		getAllStartups(id: Int): [Startup]
		getStartupByName(name: String): Startup
	}

	type Startup {
		id: Int
		name: String
		website: String
		type: String
		positions: [Position]
		img: String
	}

	type Position {
		title: String
		experience: String
		type: [String]!
	}

	type Mutation {
		createStartup(name: String, website: String, type: String): Startup
	}

	enum Type {
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
`);

module.exports = schema;

