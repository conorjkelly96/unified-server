const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const updateItemOrderStatus = async (_, { status, itemId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to update a item.");
    }

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { $set: { status } },
      { returnDocument: "after" }
    ).populate({
      path: "seller",
      populate: { path: "username" },
    });

    return updatedItem;
  } catch (error) {
    console.log(`[ERROR]: Failed to update item | ${error.message}`);
    throw new ApolloError("Failed to update item.");
  }
};

module.exports = updateItemOrderStatus;
