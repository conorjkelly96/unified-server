const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../models");

const saveJob = async (_, { jobId }, { user }) => {
  try {
    if (user) {
      const student = await Student.findByIdAndUpdate(
        user.id,
        {
          $push: { savedJobs: jobId },
        },
        { new: true }
      ).populate("savedJobs");

      return student;
    } else {
      throw new AuthenticationError("You must be logged in to create a job.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to save job | ${error.message}`);
    throw new ApolloError("Failed to save job");
  }
};

module.exports = saveJob;
