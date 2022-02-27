const { model, Schema } = require("mongoose");

const itemSchema = {
  _id: {
    type: String,
  },
  itemName: {
    type: String,
  },
  itemDescription: [
    {
      type: String,
    },
  ],
  category: {
    type: Number,
  },
  status: {
    type: String,
  },
  condition: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: String,
  },
  seller: { createdAt: "joinDate" },
  comments: {
    type: String,
  },
  images: {
    type: String,
  },
  transactions: {
    type: String,
  },
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const schema = new Schema(itemSchema);

const Item = model("item", schema);

module.exports = Item;
