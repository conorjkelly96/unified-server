const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../models");

const jobs = async (_, __, context) => {
  try {
    // //   confirm user is logged in
    // if (!context.user) {
    //   throw new AuthenticationError("You must be logged in to create a job.");
    // }

    const jobs = await Job.find({});

    return jobs;
  } catch (error) {
    console.log(`[ERROR]: Failed to get jobs | ${error.message}`);
    throw new ApolloError("Failed to get jobs.");
  }
};

module.exports = jobs;
