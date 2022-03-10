const { ApolloError, AuthenticationError } = require("apollo-server-errors");

const { Job } = require("../../models");

const deleteJob = async (_, { jobId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to delete a job.");
    }
    const deletedJob = await Job.findByIdAndDelete(jobId);

    return deletedJob;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete job | ${error.message}`);
    throw new ApolloError("Failed to delete job");
  }
};

module.exports = deleteJob;
