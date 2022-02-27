const { model, Schema } = require("mongoose");

const userSchema = {
  _id: {
    type: String,
  },
  username: {
    type: String,
  },
  email: [
    {
      type: String,
    },
  ],
  interests: {
    type: Number,
  },
  university: {
    type: String,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  universityCourse: {
    type: String,
  },
  timestamps: { createdAt: "joinDate" },
  studentStatus: {
    type: String,
  },
  sellerRating: {
    type: String,
  },
  friends: {
    type: String,
  },
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
