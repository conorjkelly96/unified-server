const { ApolloError } = require("apollo-server");

const { Staff } = require("../models");

const signupStaff = async (_, { input }) => {
  try {
    const staff = await Staff.create(input);

    return { success: true, staff };
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    throw new ApolloError("Failed to sign up");
  }
};

module.exports = signupStaff;
