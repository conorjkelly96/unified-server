const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job } = require("../../models");

const createJob = async (_, { newJobInput }, { user }) => {
  try {
    // TODO: restrict to Staff users
    if (user) {
      const postedBy = user.id;

      const newJob = await Job.create({ ...newJobInput, postedBy });

      const job = await Job.findById(newJob._id).populate("postedBy");

      return job;
    } else {
      throw new AuthenticationError("You must be logged in to create a job.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create job | ${error.message}`);
    throw new ApolloError("Failed to create job.");
  }
};

module.exports = createJob;
