const { AuthenticationError, ApolloError } = require("apollo-server");
const { Student } = require("../../models");

const saveToMyItems = async (_, { itemId }, { user }) => {
  try {
    if (user) {
      const studentData = await Student.findById(user.id);

      const savedItems = studentData.savedItems;

      const alreadySaved = savedItems.includes(itemId);

      if (!alreadySaved) {
        const student = await Student.findByIdAndUpdate(
          user.id,
          {
            $push: { savedItems: itemId },
          },
          { new: true }
        ).populate("savedItems");
        return student;
      } else {
        throw new ApolloError("Item already saved");
      }
    } else {
      throw new AuthenticationError("You must be logged in to save an item.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to save item | ${error.message}`);
    throw new ApolloError("Failed to save item");
  }
};

module.exports = saveToMyItems;
