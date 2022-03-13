const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job, Staff } = require("../../models");

const staffJobs = async (_, __, { user }) => {
  try {
    const staff = await Staff.findById(user.id);

    if (staff) {
      return await Job.find({ postedBy: user.id });
    }

    throw new AuthenticationError(
      "You must be logged in to see your job listings."
    );
  } catch (error) {
    console.log(`[ERROR]: Failed to get your jobs | ${error.message}`);
    throw new ApolloError("Failed to get your jobs.");
  }
};

module.exports = staffJobs;
