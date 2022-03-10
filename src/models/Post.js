const { model, Schema } = require("mongoose");
const formatDate = require("../utils/formatDate");

const postSchema = {};

// import reaction schema
const reactions = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
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
  //   reactions is subdocument schema
  reactions: [reactions],
};

const schema = new Schema(postSchema, { timestamps: true, id: true });

const Post = model("post", schema);

module.exports = Post;
