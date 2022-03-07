const { ApolloError } = require("apollo-server");

const { Job } = require("../models");

const createJob = async (_, { job }, context) => {
  try {
    const job = await Job.create(job);

    return { job };
  } catch (error) {
    console.log(`[ERROR]: Failed to create job | ${error.message}`);
    throw new ApolloError("Failed to create job.");
  }
};

module.exports = createJob;
