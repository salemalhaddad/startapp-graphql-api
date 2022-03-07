const db = require("../db");
const startups = require('../data/startups.json')

const resolvers = {
	Query: {
		getAllStartups: () => {
			return startups
		},
		getStartupById: (_, { id }, db) => {
			db.find(getStartupById => getStartupById.id === args.id)
		},
		// getStartupByName: (args) => {
		// 	db.find(getStartupByName => getStartupByName.name === args.name)
		// }
	},
	Startup: {
		id: (getStartupById) => getStartupById.id,
		name: (getStartupById) => getStartupById.name,
		website: (getStartupById) => getStartupById.website,
		type: (getStartupById) => getStartupById.type,
		positions: (getStartupById) => getStartupById.positions,
		img: (getStartupById) => getStartupById.img
	},
};



module.exports = { resolvers }
