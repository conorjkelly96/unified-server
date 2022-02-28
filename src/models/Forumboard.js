const { model, Schema } = require("mongoose");

const likeSchema = require("./Like");
const commentSchema = require("./Comments");

const forumBoardSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },

  postText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  likes: [likeSchema],
  comment: [commentSchema],
  category: [
    {
      type: String,
      enum: [
        "Life & Style",
        "Entertainment",
        "Study Help",
        "University & University Courses",
        "Accommodation",
        "Careers & Jobs",
      ],
      default: "Life & Style",
      required: true,
    },
  ],
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const schema = new Schema(forumBoardSchema);

const ForumBoard = model("forumboard", schema);

module.exports = ForumBoard;
