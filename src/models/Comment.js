const { Schema } = require("mongoose");

const commentSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  reactionBody: {
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
    default: Date.now(),
  },
};

const schema = new Schema(commentSchema);

module.exports = schema;
