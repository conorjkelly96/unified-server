const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const viewAllItems = async (_, __, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view all items.");
    }

    const items = await Item.find({}).populate({
      path: "seller",
      populate: { path: "username" },
    });

    return items;
  } catch (error) {
    console.log(`[ERROR]: Failed to get items | ${error.message}`);
    throw new ApolloError("Failed to get items.");
  }
};

module.exports = viewAllItems;
