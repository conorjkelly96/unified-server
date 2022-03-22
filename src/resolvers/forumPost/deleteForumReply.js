const { ApolloError, AuthenticationError } = require("apollo-server");

const { ForumPost } = require("../../models");

const deleteForumReply = async (_, { postId, replyId }, { user }) => {
  // get forumPost id and reply id
  try {
    if (!user) {
      throw new AuthenticationError(
        "You must be logged in to delete a reply from the forum."
      );
    }

    const deleteForumReply = await ForumPost.findByIdAndUpdate(
      postId,
      { $pull: { replies: { id: replyId } } },
      { new: true }
    );

    if (deleteForumReply) {
      return deleteForumReply;
    }

    throw new AuthenticationError("Reply does not exist.");
  } catch (error) {
    console.log(
      `[ERROR]: Failed to delete reply from forum | ${error.message}`
    );
    throw new ApolloError("Failed to delete reply from forum.");
  }
};

module.exports = deleteForumReply;
