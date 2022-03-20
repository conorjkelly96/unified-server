const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../models");

const removeSavedJobs = async (_, { jobId }, { user }) => {
  try {
    if (user) {
      const student = await Student.findByIdAndUpdate(
        user.id,
        {
          $pull: { savedJobs: jobId },
        },
        { new: true }
      );

      return student;
    } else {
      throw new AuthenticationError(
        "You must be logged in to remove saved job"
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to remove save job | ${error.message}`);
    throw new ApolloError("Failed to remove save job");
  }
};

module.exports = removeSavedJobs;
