const createJob = require("./createJob");
const jobs = require("./jobs");
const signupStudent = require("./signupStudent");
const dashboard = require("./dashboard");

const resolvers = {
  Query: { jobs, dashboard },
  Mutation: { createJob, signupStudent },
}

module.exports = resolvers;
