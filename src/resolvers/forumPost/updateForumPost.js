const { AuthenticationError, ApolloError } = require("apollo-server");
const { ForumPost } = require("../../models");

const updateForumPost = async (_, { id, input }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError(
        "You must be logged in to update post from the forum."
      );
    }

    const updateForumPost = await ForumPost.findByIdAndUpdate(id, input, {
      new: true,
    }).populate("postedBy");

    if (updateForumPost) {
      return updateForumPost;
    }

    throw new AuthenticationError("Post does not exist.");
  } catch (error) {
    console.log(`[ERROR]: Failed to update post from forum |${error.message}`);
    throw new ApolloError("Failed to update post from forum");
  }
};

module.exports = updateForumPost;
