const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const { validateEmail } = require("../utils");

const staffSchema = {
  username: {
    type: String,
    required: true,
    maxLength: 50,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
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

  // TODO: add validation - 1 uppercase 1 lowercase 1 number and 1 special character
  password: {
    type: String,
    required: true,
    minLength: 8,
  },

  university: {
    type: Schema.Types.ObjectId,
    ref: "University",
  },
  course: {
    type: String,
  },
  // timestamps: true,
  sellerRating: {
    type: Number,
    default: 0,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: false,
    },
  ],
  // TODO: Investigate further
  // studentStatus: {
  //   type: String,
  //   required: true,
  // },
};

const schema = new Schema(staffSchema, {
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

const Staff = model("Staff", schema);

module.exports = Staff;
