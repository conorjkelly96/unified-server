const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../models");

const saveJob = async (_, { jobId }, { user }) => {
  try {
    // get the loggedIn student id from the context
    // findByIdAndUpdate using the student id
    // job Id from the input
    // we need to push the jobId into the job array
    if (user) {
      console.log(context.user);
      const student = await Student.findOneAndUpdate(
        { _id: context.user.id },
        { $addToSet: { savedJobs: jobId } }
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
