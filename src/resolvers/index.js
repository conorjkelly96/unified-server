const signupStudent = require("./signupStudent");
const dashboard = require("./dashboard");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    signupStudent,
  },
};

module.exports = resolvers;
