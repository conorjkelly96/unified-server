const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const removeCommentFromItem = async (_, { comment, itemId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in to delete a job.");
    }

    const item = await Item.findByIdAndUpdate(itemId, {
      $pull: { comments: comment },
    });

    return item;
  } catch (error) {
    console.log(`[ERROR]: Failed to remove comment | ${error.message}`);
    throw new ApolloError("Failed to remove comment");
  }
};

module.exports = removeCommentFromItem;
