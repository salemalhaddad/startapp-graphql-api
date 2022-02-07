const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } = graphql;

const StartupType = new GraphQLObjectType({
  name: "Startup",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    type: { type: GraphQLString },
	positions: { type: new GraphQLList(PositionType) },
	img: { type: GraphQLString }
  }),
});

const PositionType = new GraphQLObjectType({
	name: "Position",
	fields: () => ({
		title: { type: GraphQLString },
		experience: { type: GraphQLString },
		type: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
	})
})

module.exports = StartupType;

