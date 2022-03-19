const { model, Schema } = require("mongoose");
const { validatePrice } = require("../utils");

const transactionSchema = require("./Transaction");
const commentSchema = require("./Comment");

const itemSchema = {
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500,
  },

  category: {
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

  status: {
    type: String,
    enum: ["For Sale", "Sold"],
    default: "For Sale",
  },

  condition: {
    type: String,
    enum: ["New", "Fair", "Like New", "Used"],
    required: true,
  },

  price: { type: Number, validate: validatePrice },
  quantity: {
    type: Number,
    default: 1,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  comments: [commentSchema],
  images: [
    {
      type: String,
    },
  ],
  transactions: [transactionSchema],
};

const schema = new Schema(itemSchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

const Item = model("Item", schema);

module.exports = Item;
