const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { GraphQLID } = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID}
  }
});

module.exports = RootQueryType;
