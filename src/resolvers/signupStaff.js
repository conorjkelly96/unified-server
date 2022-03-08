const { ApolloError } = require("apollo-server");

const { Staff } = require("../models");

const signup = async (_, { input }) => {
  try {
    const staff = await Staff.create(input);

    return { staff };
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    throw new ApolloError("Failed to sign up");
  }
};

module.exports = signup;
