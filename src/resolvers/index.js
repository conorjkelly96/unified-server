const signupStudent = require("./signupStudent");
const signupStaff = require("./signupStaff");
const loginStudent = require("./loginStudent");
const loginStaff = require("./loginStaff");
const dashboard = require("./dashboard");
const createItem = require("./createItem");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    signupStudent,
    createItem,
    signupStaff,
    loginStudent,
    loginStaff,
  },
};

module.exports = resolvers;
