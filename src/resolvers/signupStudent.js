const { ApolloError } = require("apollo-server");

const { Student } = require("../models");

const signup = async (_, { input }) => {
  try {
    await Student.create(input);

    return {
      success: true,
      message: "Successfully created account",
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    throw new ApolloError("Failed to sign up");
  }
};

module.exports = signup;
