const { ApolloError, AuthenticationError } = require("apollo-server-errors");
const { ForumPost } = require("../../models");

const forumPosts = async (_, __, { user }) => {
  try {
    //restrict to student
    if (user) {
      //get all forum posts
      const forumPosts = await ForumPost.find({}).populate("postedBy");

      return forumPosts;
    } else {
      //throw authentication error
      throw new AuthenticationError(
        "You must be logged in as a student to view forum posts"
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get forum posts | ${error.message}`);
    throw new ApolloError("Failed to get forum posts.");
  }
};

module.exports = forumPosts;
