const { model, Schema } = require("mongoose");
const { formatDateTime } = require("../utils");

// import reaction schema
const replies = require("./ForumReply");

const forumPostSchema = {
  postText: {
    type: String,
    required: true,
    maxLength: 2000,
  },

  tags: [
    {
      type: String,
    },
  ],

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDateTime,
  },

  replies: [replies],
};

const schema = new Schema(forumPostSchema, {
  timestamps: true,
  id: true,
  toJSON: { getters: true, virtuals: true },
});

// virtual to total the reply count
schema.virtual("replyCount").get(function () {
  return this?.replies?.length || 0;
});

const ForumPost = model("forumPost", schema);

module.exports = ForumPost;
