const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../models");

const createJob = async (_, { jobInput }, context) => {
  try {
    // //   confirm user is logged in
    // if (!context.user) {
    //   throw new AuthenticationError("You must be logged in to create a job.");
    // }

    const newJob = await Job.create(jobInput);
    console.log(newJob);

    return newJob;
  } catch (error) {
    console.log(`[ERROR]: Failed to create job | ${error.message}`);
    throw new ApolloError("Failed to create job.");
  }
};

module.exports = createJob;
