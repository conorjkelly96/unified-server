const { model, Schema } = require("mongoose");

const forumBoardSchema = {
  _id: {
    type: String,
  },
  username: {
    type: String,
  },
  postTitle: [
    {
      type: String,
    },
  ],
  postText: {
    type: Number,
  },
  likes: {
    type: String,
  },
  comment: {
    type: String,
  },
  category: [
    {
      type: String,
    },
  ],
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const schema = new Schema(forumBoardSchema);

const ForumBoard = model("forumboard", schema);

module.exports = ForumBoard;
