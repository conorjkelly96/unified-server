const createJob = require("./createJob");
const jobs = require("./jobs");
const signupStudent = require("./signupStudent");
const dashboard = require("./dashboard");
const updateJob = require("./updateJob");

const resolvers = {
  Query: { jobs, dashboard },
  Mutation: { createJob, signupStudent, updateJob },
};

module.exports = resolvers;
