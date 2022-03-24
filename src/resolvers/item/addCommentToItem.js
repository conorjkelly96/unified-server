const { ApolloError, AuthenticationError } = require("apollo-server");

const { Item } = require("../../models");

const addCommentToItem = async (_, { input }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("You must be logged in leave a comment.");
    }

    const { itemId, commentBody } = input;

    const item = await Item.findByIdAndUpdate(itemId, {
      $push: {
        comments: { commentBody: commentBody, username: user.username },
      },
    });

    return item;
  } catch (error) {
    console.log(`[ERROR]: Failed to post comment | ${error.message}`);
    throw new ApolloError("Failed to post comment");
  }
};

module.exports = addCommentToItem;
