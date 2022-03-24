const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job, Student } = require("../../models");

const getStudentJobs = async (_, __, { user }) => {
  try {
    const student = await Student.findById(user.id).populate("savedJobs");

    if (student) {
      return student.savedJobs;
    }

    throw new AuthenticationError(
      "You must be logged in to see your job listings."
    );
  } catch (error) {
    console.log(`[ERROR]: Failed to get your jobs | ${error.message}`);
    throw new ApolloError("Failed to get your jobs.");
  }
};

module.exports = getStudentJobs;
