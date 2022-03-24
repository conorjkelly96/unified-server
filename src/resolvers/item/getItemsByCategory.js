const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const getItemsByCategory = async (_, { input }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view all items.");
    }

    const items = await Item.find({ category: input });

    return items;
  } catch (error) {
    console.log(`[ERROR]: Failed to get items | ${error.message}`);
    throw new ApolloError("Failed to get items.");
  }
};

module.exports = getItemsByCategory;
