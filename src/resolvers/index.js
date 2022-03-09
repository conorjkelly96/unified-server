const signupStudent = require("./signupStudent");
const signupStaff = require("./signupStaff");
const loginStudent = require("./loginStudent");
const loginStaff = require("./loginStaff");
const dashboard = require("./dashboard");
const colleges = require("./colleges");

const resolvers = {
  Query: {
    dashboard,
    colleges,
  },
  Mutation: {
    signupStudent,
    signupStaff,
    loginStudent,
    loginStaff,
  },
};

module.exports = resolvers;
