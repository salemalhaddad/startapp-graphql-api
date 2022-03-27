// const { startups } = require("../db");
const { uuid, isUuid } = require('uuidv4');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const resolvers = {
	Query: {
		getAllStartups: () => { //query all startups
			return prisma.startup.findMany()
		},
		getStartupByUUID: async (parent, { uuid }) => { //query startup by UUID
			const startups = await prisma.startup.findMany()
			return startups.find(getStartupByUUID => getStartupByUUID.uuid === uuid)
		},
		getStartupByName: async (parent, { name }) => { //query startup by name
			const startups = await prisma.startup.findMany()
			return startups.find(getStartupByName => getStartupByName.name === name)
		},
		getStartupByType: async (parent, { type }) => { //query startup by type
			const startups = await prisma.startup.findMany()
			return startups.find(getStartupByType => getStartupByType.type === type)
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
		type: (getStartupByUUID) => getStartupByUUID.type
	},
	Mutation: {
		createStartup: async (parent, {name, website, type, img}) => { //create startup given name, website, type
			const startups = await prisma.startup.findMany()

			console.log(startups)

			const startup = {
				uuid: uuid(),
				name: name,
				website: website,
				type: type,
				img: img,
				positions: []
			}

			if (startups.some(item => item.name === startup.name) || startup.some(item => item.website === startup.website)) { //check if startup exists in db
				throw new Error('Duplicate startup name and/or website');
			}

			return prisma.startup.create({
				data: startup
			});
		},
		deleteStartup: (parent, { uuid }) => { //delete startup given uuid

			return prisma.startup.delete({
				where: {
				  uuid: uuid,
				},
			  });
		},
		addPosition: async (parent, {uuid, title, experience, type}) => { //add a position given uuid
			const startups = await prisma.startup.findMany()

			target = startups.find(addPosition => addPosition.uuid === uuid)
			let startup = {
				experience: experience,
				title: title,
				type: type
			}

			if (startups.some(item => item.uuid === target.uuid)) {
				let index = 1;
				let i = 0;
				for (i = 0; i < startups.length; i++) {
					if (startups[i].uuid === uuid)
						index = i
				}
				return prisma.startup.update({
					where: {
						uuid: uuid
					},
					data: {
						positions: {
							push: startup
						}
					}
				})
			}
			else {
				throw new Error('Startup not found with given id');
			}
		},
		addImg: async (parent, { uuid, img }) => { //add img given uuid
			const startups = await prisma.startup.findMany()

			target = startups.find(addPosition => addPosition.uuid === uuid)

			if (startups.some(item => item.uuid === target.uuid)) {
				let index = 1;
				let i = 0;
				for (i = 0; i < startups.length; i++) {
					if (startups[i].uuid === uuid)
						index = i
				}
				return prisma.startup.update({
					where: {
						uuid: uuid
					},
					data: {
						img: img
					}
				})
			}
			else {
				throw new Error('Startup not found with given id');
			}
		}
	}
};



module.exports = { resolvers }
