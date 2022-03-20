const { ApolloError, AuthenticationError } = require("apollo-server-errors");

const { ForumPost } = require("../../models");

const deleteForumPost = async (_, { id }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError(
        "You must be logged in to delete post from the forum."
      );
    }

    const deleteForumPost = await ForumPost.findByIdAndDelete(id);

    if (deleteForumPost) {
      return deleteForumPost;
    }

    throw new AuthenticationError("Post does not exist.");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete post from forum |${error.message}`);
    throw new ApolloError("Failed to delete post from forum.");
  }
};

module.exports = deleteForumPost;
