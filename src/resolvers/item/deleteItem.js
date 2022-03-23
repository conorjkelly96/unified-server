const { ApolloError, AuthenticationError } = require("apollo-server-errors");

const { Item } = require("../../models");

const deleteItem = async (_, { itemId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to delete a job.");
    }
    const deletedItem = await Item.findByIdAndDelete(itemId);

    return deletedItem;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete item | ${error.message}`);
    throw new ApolloError("Failed to delete item");
  }
};

module.exports = deleteItem;
