const { model, Schema } = require("mongoose");

const universitySchema = {
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: String,
    },
  ],
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
};

const schema = new Schema(universitySchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

const University = model("University", schema);

module.exports = University;
