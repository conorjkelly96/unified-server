const { model, Schema } = require("mongoose");
const { validateEmail } = require("../utils");
const bcrypt = require("bcrypt");

const userSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: [
    {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
  ],
  interests: [
    {
      type: String,
      enum: [
        "Travelling",
        "Exercise",
        "Movies",
        "Dancing",
        "Cooking",
        "Outdoors",
        "Politics",
        "Pets",
      ],
    },
  ],
  university: {
    type: String,
    default: "University of Birmingham",
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  bio: {
    type: String,
    minLength: 1,
    maxLength: 100,
  },
  universityCourse: {
    type: String,
    required: true,
  },
  timestamps: { createdAt: "joinDate" },
  studentStatus: {
    type: String,
    required: true,
  },
  sellerRating: {
    type: Number,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  ],
};

const schema = new Schema(userSchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

schema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", schema);

module.exports = User;
