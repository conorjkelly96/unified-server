const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../models");

const removeFromMyItems = async (_, { itemId }, { user }) => {
  try {
    if (user) {
      const student = await Student.findByIdAndUpdate(
        user.id,
        {
          $pull: { savedItems: itemId },
        },
        { new: true }
      ).populate("savedItems");

      return student;
    } else {
      throw new AuthenticationError("You must be logged in to save an item.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to remove item | ${error.message}`);
    throw new ApolloError("Failed to remove item");
  }
};

module.exports = removeFromMyItems;
