const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const getSingleItemData = async (_, { id }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view an item.");
    }

    const selectedItem = await Item.findById(id).populate("seller");

    return selectedItem;
  } catch (error) {
    console.log(`[ERROR]: Failed to view item | ${error.message}`);
    throw new ApolloError("Failed to view item.");
  }
};

module.exports = getSingleItemData;
