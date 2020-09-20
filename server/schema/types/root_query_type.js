const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { GraphQLID, GraphQLString } = require('graphql');
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLString}
  }
});

module.exports = RootQueryType;
