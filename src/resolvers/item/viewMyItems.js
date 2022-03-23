const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const viewMyItems = async (_, __, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view all items.");
    }

    // logged in user
    const { id } = user;

    const items = await Item.find({
      seller: id,
    }).populate({
      path: "seller",
      populate: { path: "username" },
    });

    return items;
  } catch (error) {
    console.log(`[ERROR]: Failed to get items | ${error.message}`);
    throw new ApolloError("Failed to get items.");
  }
};

module.exports = viewMyItems;
