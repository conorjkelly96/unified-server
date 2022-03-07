const createJob = require("./createJob");
const jobs = require("./jobs");

const resolvers = {
  Query: { jobs },
  Mutation: { createJob },
};

module.exports = resolvers;
