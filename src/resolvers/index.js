const signupStudent = require("./signupStudent");
const dashboard = require("./dashboard");
const createItem = require("./createItem");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    signupStudent,
    createItem,
  },
};

module.exports = resolvers;
