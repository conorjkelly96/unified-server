const { ApolloError, AuthenticationError } = require("apollo-server");

const { Job, Staff } = require("../../models");

// TODO: restrict to only logged in Staff user
//* Should the staffId come from the user context instead?
const staffJobs = async (_, { staffId }) => {
  try {
    const staff = await Staff.findOne({ staffId });

    if (staff) {
      const jobs = await Job.find({ postedBy: staffId });

      return jobs;
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
