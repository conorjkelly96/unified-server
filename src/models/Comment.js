const { Schema } = require("mongoose");

const commentSchema = {
  commentId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  commentBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
};

const schema = new Schema(commentSchema);

module.exports = schema;
