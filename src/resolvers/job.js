const { AuthenticationError, ApolloError } = require("apollo-server-errors");
const { Job } = require("../models");

const job = async (_, { jobId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view a job.");
    }
    const job = await Job.findById(jobId).populate({
      path: "postedBy",
      populate: { path: "university" },
    });

    return job;
  } catch (error) {
    console.log(`[ERROR]: Failed to get job | ${error.message}`);
    throw new ApolloError("Failed to get job.");
  }
};

module.exports = job;
