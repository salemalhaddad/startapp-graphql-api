// const { startups } = require("../db");
const startups = require('../data/startups.json')
const fs = require("fs")
const { uuid, isUuid } = require('uuidv4');
let startupjson = fs.readFileSync('./server/data/startups.json', "utf-8")
let startupFile = JSON.parse(startupjson)

const resolvers = {
	Query: {
		getAllStartups: () => { //query all startups
			return startups
		},
		getStartupByUUID: (parent, args) => { //query startup by UUID
			return startups.find(getStartupByUUID => getStartupByUUID.uuid === args.uuid)
		},
		getStartupByName: (parent, args) => { //query startup by name
			return startups.find(getStartupByName => getStartupByName.name === args.name)
		},
		getStartupByType: (parent, args) => { //query startup by type
			return startups.find(getStartupByType => getStartupByType.type === args.type)
		},
	},
	Startup: {
		// id: (getStartupById) => getStartupById.id,
		uuid: (getStartupByUUID) => getStartupByUUID.uuid,
		name: (getStartupByUUID) => getStartupByUUID.name,
		website: (getStartupByUUID) => getStartupByUUID.website,
		type: (getStartupByUUID) => getStartupByUUID.type,
		positions: (getStartupByUUID) => getStartupByUUID.positions,
		img: (getStartupByUUID) => getStartupByUUID.img
	},

	Position: {
		title: (getStartupByUUID) => getStartupByUUID.title,
		experience: (getStartupByUUID) => getStartupByUUID.experience,
		type: (getStartupByUUID) => getStartupByUUID.experience
	},
	Mutation: {
		createStartup: (parent, args) => { //create startup given name, website, type
			// let idCount = startups.length + 1

			const startup = {
				// id: idCount,
				uuid: uuid(),
				name: args.name,
				website: args.website,
				type: args.type,
				img: "",
				positions: []
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
		deleteStartup: (parent, args) => { //delete startup given uuid
			let idCount = startups.length + 1

			if (startups.some(item => item.uuid === args.uuid) || startups.some(item => item.name === args.name) || startups.some(item => item.website === args.website)) { //check if startup exists in json file
				startupFile = startupFile.filter(child => parseInt(child.uuid) !== args.uuid)
				startupjson = JSON.stringify(startupFile, null, 4)
				fs.writeFileSync("./server/data/startups.json", startupjson, "utf-8")
				console.log(startupFile)
				throw new Error('Startup Deleted Successfully');
			}
			else {
				throw new Error('No such id');
			}
			return startupFile;
		},
		addPosition: (parent, args) => { //add a position given uuid
			target = startups.find(addPosition => addPosition.uuid === args.uuid)
			let startup = {
				experience: args.experience,
				title: args.title,
				type: args.type
			}

			if (startups.some(item => item.uuid === target.uuid)) {
				let index = 1;
				let i = 0;
				for (i = 0; i < startups.length; i++) {
					if (startups[i].uuid === args.uuid)
						index = i
				}
				startupFile[index].positions.push(startup)
				startupjson = JSON.stringify(startupFile, null, 4)
				fs.writeFileSync("./server/data/startups.json", startupjson, "utf-8")
			}
			else {
				throw new Error('Startup not found with given id');
			}
			return target;
		},
		addImg: (parent, args) => { //add img given uuid
			target = startups.find(addPosition => addPosition.uuid === args.uuid)

			let startup = {
				img: args.img
			}

			if (startups.some(item => item.uuid === target.uuid)) {
				let index = 1;
				let i = 0;
				for (i = 0; i < startups.length; i++) {
					if (startups[i].uuid === args.uuid)
						index = i
				}
				startupFile[index].img = startup.img
				startupjson = JSON.stringify(startupFile, null, 4)
				fs.writeFileSync("./server/data/startups.json", startupjson, "utf-8")
			}
			else {
				throw new Error('Startup not found with given id');
			}
			return target;
		}
	}
};



module.exports = { resolvers }
