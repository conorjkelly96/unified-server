const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const commentOnItem = async (_, { comment, itemId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to delete a job.");
    }

    const item = await Item.findByIdAndUpdate(itemId, {
      $push: { comments: comment },
    });

    return item;
  } catch (error) {
    console.log(`[ERROR]: Failed to post comment | ${error.message}`);
    throw new ApolloError("Failed to post comment");
  }
};

module.exports = commentOnItem;
