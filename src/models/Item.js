const { model, Schema } = require("mongoose");
const { validatePrice } = require("../utils");

const imageSchema = require("./Images");

const itemSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: [
    {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 100,
    },
  ],
  category: [
    {
      type: String,
      enum: [
        "Clothing & Accessories",
        "Sporting Goods",
        "Electronics",
        "Academic Materials",
        "Other",
      ],
      default: "Academic Materials",
      required: true,
    },
  ],
  status: [
    {
      type: String,
      enum: ["For Sale", "Sold"],
      required: true,
    },
  ],
  condition: [
    {
      type: String,
      enum: ["New", "Used"],
      required: true,
    },
  ],
  price: { type: Number, validate: validatePrice },
  quantity: {
    type: Number,
    required: true,
  },
  seller: { type: String, required: true },
  comments: {
    type: String,
    required: true,
  },
  images: [imageSchema],
  transactions: {
    type: String,
  },
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const schema = new Schema(itemSchema);

const Item = model("item", schema);

module.exports = Item;
