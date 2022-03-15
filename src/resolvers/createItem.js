const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../models");

const { notAuthorized } = require("../utils/errorMessages");

const createItem = async (_, { input }, { user }) => {
  try {
    if (user) {
      const seller = user.id;
      const newItem = await Item.create({ ...input, seller });
      const item = newItem.populate("seller");
      return item;
    } else {
      console.log(`[ERROR]: Failed to create item | ${notAuthorized}`);
      throw new AuthenticationError(notAuthorized);
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create item | ${error.message}`);
    throw new ApolloError("Failed to create item");
  }
};

module.exports = createItem;
