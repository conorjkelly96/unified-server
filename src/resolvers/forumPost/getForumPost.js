const { ApolloError, AuthenticationError } = require("apollo-server-errors");

const { ForumPost } = require("../../models");

const getForumPost = async (_, { postId }, { user }) => {
  try {
    if (user) {
      const forumPost = await ForumPost.findById(postId)
        .populate("postedBy")
        .populate("replies.user");

      return forumPost;
    } else {
      throw new AuthenticationError(
        "You must be logged in as a student to view forum posts"
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get forum post | ${error.message}`);
    throw new ApolloError("Failed to get forum post.");
  }
};

module.exports = getForumPost;
