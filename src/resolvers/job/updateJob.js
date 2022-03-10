const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../../models");

const updateJob = async (_, { jobInput, jobId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to update a job.");
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { $set: { ...jobInput } },
      { returnDocument: "after" }
    ).populate({
      path: "postedBy",
      populate: { path: "university" },
    });

    return updatedJob;
  } catch (error) {
    console.log(`[ERROR]: Failed to update job | ${error.message}`);
    throw new ApolloError("Failed to update job.");
  }
};

module.exports = updateJob;
