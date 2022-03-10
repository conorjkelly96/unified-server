const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../models");

const updateJob = async (_, { jobInput }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to create a job.");
    }

    console.log("jobInput:", jobInput);

    const updatedJob = await Job.findByIdAndUpdate(
      jobInput.id,
      { $set: { jobInput } },
      { returnDocument: "after" }
    );
    console.log("updatedJob:", updatedJob);

    return updatedJob;
  } catch (error) {
    console.log(`[ERROR]: Failed to update job | ${error.message}`);
    throw new ApolloError("Failed to update job.");
  }
};

module.exports = updateJob;
