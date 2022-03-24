const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const staffSchema = {
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
  username: {
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
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address.",
    ],
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    // match at least 1: uppercase, lowercase, number, and special characters
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please enter a password with at least 8 characters, including at least 1 number, 1 uppercase, 1 lowercase, and 1 special character.",
    ],
  },

  university: {
    type: Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },

  college: {
    type: String,
    required: true,
  },
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
