const { ApolloError, AuthenticationError } = require("apollo-server-errors");
const deleteForumPost = require("../../models/ForumPost");

// TODO: Delete post from forum
const deleteForumPost = async (_, { forumPost }, { context }) => {
  try {
    if (context.forumPost) {
      const postedBy = user.id;
      const forumPost = await ForumPost.delete({ ...forumPost, postedBy });
      const post = await ForumPost.findById(newForumPost._id).populate(
        "postedBy"
      );
      return post;
    } else {
      throw new AuthenticationError(
        "You must be logged in to delete post from the forum."
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete post from forum | ${error.message}`);
    throw new ApolloError("Failed to delete post from forum.");
  }
};

module.exports = deleteForumPost;
