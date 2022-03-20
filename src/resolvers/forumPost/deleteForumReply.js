const { ApolloError, AuthenticationError } = require("apollo-server");

const { ForumPost } = require("../../models/FormPost");

const deleteForumReply = async (_, { input, postId }, { user }) => {
  try {
    if (!user) {
      if (!input) {
        throw new AuthenticationError("Failed to delete reply.");
      }
    }
    const deleteForumReply = await ForumPost.findByIdAndUpdate(postId);

    return deleteForumReply;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reply | ${error.message}`);
    throw new ApolloError("Failed to delete reply.");
  }
};

module.exports = deleteForumReply;
