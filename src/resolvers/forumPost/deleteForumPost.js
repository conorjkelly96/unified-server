const { ApolloError, AuthenticationError } = require("apollo-server-errors");

const { ForumPost } = require("../../models/ForumPost");

const deleteForumPost = async (_, { forumId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError(
        "You must be logged in to delete post from the forum."
      );
    }
    const deleteForumPost = await ForumPost.findByIdAndDelete(forumId);

    return deleteForumPost;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete post from forum |${error.message}`);
    throw new ApolloError("Failed to delete post from forum.");
  }
};

module.exports = deleteForumPost;
