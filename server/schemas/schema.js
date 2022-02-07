const graphql = require("graphql");
const crypto = require('crypto')

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;
const startupData = require("../startups-db.json");

const startupType = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    getAllStartups: {
      type: new GraphQLList(startupType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return startupData;
      },
	},
	getStartupByName: {
		type: startupType,
		args: { name: { type: GraphQLString } },
		resolve: (parent, args) => startupData.find(getStartupByName => getStartupByName.name === args.name)
	},
	})
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStartup: {
      type: startupType,
      args: {
        name: { type: GraphQLString },
        website: { type: GraphQLString },
		type: { type: GraphQLString },
		// positions: { type: new GraphQLList(GraphQLString) },
		// img: { type: GraphQLString }
      },
      resolve(parent, args) {
        startupData.push({
          id: startupData.length + 1,
		  type: args.type,
          name: args.name,
          website: args.website,
		  positions: args.positions,
		  img: args.img
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
