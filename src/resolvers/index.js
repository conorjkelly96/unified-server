const createJob = require("./createJob");

const resolvers = {
  Query: {},
  Mutation: { createJob },
};

module.exports = resolvers;
