const { Item } = require("../../models");

const getCommentsOnMyItems = (_, __, { user }) => {
  try {
    if (user) {
      const items = await Item.find({ seller: user.id })
        .populate("postedBy")
        .populate("replies");

      return forumPost;
    } else {
      throw new AuthenticationError(
        "You must be logged in as a student to view items"
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get items | ${error.message}`);
    throw new ApolloError("Failed to get items.");
  }
};

module.exports = getCommentsOnMyItems;
