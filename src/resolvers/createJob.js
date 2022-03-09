const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../models");

const createJob = async (_, { newJobInput }, { user }) => {
  try {
    //   confirm user is logged in

    if (user) {
      const postedBy = user.id;

      return await Job.create({ ...newJobInput, postedBy });
    } else {
      throw new AuthenticationError("You must be logged in to create a job.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create job | ${error.message}`);
    throw new ApolloError("Failed to create job.");
  }
};

module.exports = createJob;
