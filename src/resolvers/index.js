const login = require("./login");
const signUp = require("./signup");
const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    login,
    signUp,
    postImage,
  },
};

module.exports = resolvers;
