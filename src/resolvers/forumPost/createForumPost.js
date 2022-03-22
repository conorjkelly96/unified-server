const { ApolloError, AuthenticationError } = require("apollo-server-errors");
const ForumPost = require("../../models/ForumPost");

// TODO: restrict to Student users
const createForumPost = async (_, { forumPost }, { user }) => {
  try {
    if (user) {
      const postedBy = user.id;
      const newForumPost = await ForumPost.create({ ...forumPost, postedBy });
      const post = await ForumPost.findById(newForumPost._id).populate(
        "postedBy"
      );
      return post;
    } else {
      throw new AuthenticationError(
        "You must be logged in to post to the forum."
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create forum post | ${error.message}`);
    throw new ApolloError("Failed to create forum post.");
  }
};

module.exports = createForumPost;
