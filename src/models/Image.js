const { Schema } = require("mongoose");

const imageSchema = {
  _id: {
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
