const { ApolloError, AuthenticationError } = require("apollo-server");

const ForumPost = require("../../models/ForumPost");

const forumReply = async (_, { input, postId }, { user }) => {
  try {
    //   get username, postId, and input(replyText)
    if (user) {
      if (!input) {
        throw new ApolloError("Forum reply cannot be empty.");
      }
      const reply = await ForumPost.findByIdAndUpdate(
        postId,
        { $push: { replies: { ...input, user: user.username } } },
        { returnDocument: "after" }
      );

      return reply;
    } else {
      throw new AuthenticationError(
        "You must be logged in as a student to reply to a forum post."
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to post a reply | ${error.message}`);
    throw new ApolloError("Failed to post a reply.");
  }
};

module.exports = forumReply;
