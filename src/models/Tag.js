const { model, Schema } = require("mongoose");

const tagSchema = {
  name: {
    type: String,
    unique: true,
    required: true,
  },
};

const schema = new Schema(tagSchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

const Tag = model("Tag", schema);

module.exports = Tag;
