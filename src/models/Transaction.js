const { model, Schema } = require("mongoose");

const transactionSchema = {
  _id: {
    type: String,
  },
  buyer: {
    type: String,
  },
  transactionStatus: [
    {
      type: String,
    },
  ],
  collectionDate: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  buyerRating: {
    type: String,
  },
};

const schema = new Schema(transactionSchema);

const Transaction = model("transaction", schema);

module.exports = Transaction;
