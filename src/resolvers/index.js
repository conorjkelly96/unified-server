const signupStudent = require("./signupStudent");
const loginStudent = require("./loginStudent");
const dashboard = require("./dashboard");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    signupStudent,
    loginStudent,
  },
};

module.exports = resolvers;
