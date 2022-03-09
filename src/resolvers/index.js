const createJob = require("./createJob");
const jobs = require("./jobs");
const signupStudent = require("./signupStudent");
const signupStaff = require("./signupStaff");
const loginStudent = require("./loginStudent");
const loginStaff = require("./loginStaff");
const dashboard = require("./dashboard");
const createItem = require("./createItem");
const updateJob = require("./updateJob");

const resolvers = {
  Query: { jobs, dashboard },
  Mutation: {
    createJob,
    signupStudent,
    createItem,
    updateJob,
    signupStaff,
    loginStudent,
    loginStaff,
  },
};

module.exports = resolvers;
