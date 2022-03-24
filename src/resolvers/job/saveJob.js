const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../../models");

const saveJob = async (_, { jobId }, { user }) => {
  try {
    if (user) {
      const studentData = await Student.findById(user.id);
      const savedJobs = studentData.savedJobs;

      const alreadySaved = savedJobs.includes(jobId);

      if (!alreadySaved) {
        const student = await Student.findByIdAndUpdate(
          user.id,
          {
            $push: { savedJobs: jobId },
          },
          { new: true }
        ).populate("savedJobs");
        return student;
      } else {
        throw new ApolloError("Job already saved");
      }
    } else {
      throw new AuthenticationError("You must be logged in to create a job.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to save job | ${error.message}`);
    throw new ApolloError("Failed to save job");
  }
};

module.exports = saveJob;
