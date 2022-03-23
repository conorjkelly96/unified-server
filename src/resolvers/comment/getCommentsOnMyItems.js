const { Item } = require("../../models");

const getCommentsOnMyItems = async (_, __, { user }) => {
  try {
    if (user) {
      console.log(user.id);
      const items = await Item.find({ seller: user.id });

      return items;
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
