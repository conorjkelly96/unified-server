const { Schema } = require("mongoose");
const { formatDate } = require("../utils");

const forumReplySchema = {
  forumReplyId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  forumReplyBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
};

const schema = new Schema(forumReplySchema, {
  toJSON: {
    getters: true,
  },
});

module.exports = schema;
