const signupStudent = require("./signupStudent");
const signupStaff = require("./signupStaff");
const loginStudent = require("./loginStudent");
const loginStaff = require("./loginStaff");
const dashboard = require("./dashboard");
const colleges = require("./colleges");
const universities = require("./universities");

const resolvers = {
  Query: {
    dashboard,
    colleges,
    universities,
  },
  Mutation: {
    signupStudent,
    signupStaff,
    loginStudent,
    loginStaff,
  },
};

module.exports = resolvers;
