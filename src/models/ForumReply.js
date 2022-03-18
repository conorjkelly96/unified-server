const { Schema } = require("mongoose");
const { formatDate } = require("../utils");

const forumReplySchema = {
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  text: {
    type: String,
    required: true,
    maxLength: 280,
  },
  user: {
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
