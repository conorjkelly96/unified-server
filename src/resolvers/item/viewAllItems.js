const { ApolloError, AuthenticationError } = require("apollo-server");
const e = require("express");

const { Item } = require("../../models");

const viewAllItems = async (_, { category }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to view all items.");
    }
    if (category) {
      const items = await Item.find({ category: category }).populate({
        path: "seller",
        populate: { path: "username" },
      });
      return items;
    } else {
      const items = await Item.find({}).populate({
        path: "seller",
        populate: { path: "username" },
      });
      return items;
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get items | ${error.message}`);
    throw new ApolloError("Failed to get items.");
  }
};

module.exports = viewAllItems;
