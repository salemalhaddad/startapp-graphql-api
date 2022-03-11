// const { startups } = require("../db");
const startups = require('../data/startups.json')
const fs = require("fs")
const { uuid, isUuid } = require('uuidv4');
let startupjson = fs.readFileSync('./server/data/startups.json', "utf-8")
let startupFile = JSON.parse(startupjson)

const resolvers = {
	Query: {
		getAllStartups: () => {
			return startups
		},
		getStartupById: (parent, args) => {
			return startups.find(getStartupById => getStartupById.id === args.id)
		},
		getStartupByName: (parent, args) => {
			return startups.find(getStartupByName => getStartupByName.name === args.name)
		},
		getStartupByType: (parent, args) => {
			return startups.find(getStartupByType => getStartupByType.type === args.type)
		}
	},
	Startup: {
		id: (getStartupById) => getStartupById.id,
		uuid: (getStartupById) => getStartupById.uuid,
		name: (getStartupById) => getStartupById.name,
		website: (getStartupById) => getStartupById.website,
		type: (getStartupById) => getStartupById.type,
		positions: (getStartupById) => getStartupById.positions,
		img: (getStartupById) => getStartupById.img
	},
	Mutation: {
		createStartup: (parent, args) => {
			let idCount = startups.length + 1

			const startup = {
				id: idCount,
				uuid: uuid(),
				name: args.name,
				website: args.website,
				type: args.type,
				img: args.img,
			}

			if (startups.some(item => item.name === startup.name) || startups.some(item => item.website === startup.website)) { //check if startup exists in json file
				throw new Error('Duplicate startup name and/or website');
			}

			else {
				startupFile.push(startup)
				startupjson = JSON.stringify(startupFile, null, 4)
				fs.writeFileSync("./server/data/startups.json", startupjson, "utf-8")
				console.log(1)
			}

			return startup;
		},
		addPositions: (parent, args) => {
			let target = startups.find(addPositions => addPositions.id === args.id)
			target.positions += args.position
			return target;
		}
	}
};


module.exports = { resolvers }
