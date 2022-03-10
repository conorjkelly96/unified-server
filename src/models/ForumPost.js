const { model, Schema } = require("mongoose");
const { formatDate } = require("../utils");

// import reaction schema
const replies = require("./ForumReply");

const forumPostSchema = {
  postText: {
    type: String,
    required: true,
    maxLength: 2000,
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },

  //   replies is subdocument schema
  replies: [replies],
};

const schema = new Schema(forumPostSchema, {
  timestamps: true,
  id: true,
  toJSON: { getters: true },
});

// virtual to total the reply count
schema.virtual("replyCount").get(function () {
  return this.replies.length;
});

const ForumPost = model("forumPost", schema);

module.exports = ForumPost;
