const { Schema } = require("mongoose");

// schema only
const imageSchema = {
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
};

const schema = new Schema(imageSchema);

module.exports = schema;