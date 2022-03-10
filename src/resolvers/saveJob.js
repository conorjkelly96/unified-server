const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../models");

const saveJob = async (_, { input }, context) => {
  try {
    // get the loggedIn student id from the context
    // findByIdAndUpdate using the student id
    // job Id from the input
    // we need to push the jobId into the job array
    if (context.student) {
      const student = await Student.findOneAndUpdate(
        { _id: context.student._id },
        { $addToSet: { savedJobs: input } }
      );
      return student;
    }
    console.log(`[ERROR]: Failed to save job | Student not logged in`);
    throw new AuthenticationError("Failed to save job");
  } catch (error) {
    console.log(`[ERROR]: Failed to save job | ${error.message}`);
    throw new ApolloError("Failed to save job");
  }
};

module.exports = saveJob;
