const { ApolloError } = require("apollo-server");

const { Item } = require("../models");

const createItem = async (_, { input }) => {
  try {
    const item = await Item.create(input);

    return { item };
  } catch (error) {
    console.log(`[ERROR]: Failed to create item | ${error.message}`);
    throw new ApolloError("Failed to create item");
  }
};

module.exports = createItem;
