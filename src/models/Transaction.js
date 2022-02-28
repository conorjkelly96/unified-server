const { model, Schema } = require("mongoose");

const transactionSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  buyer: {
    type: String,
    ref: "user",
  },
  transactionStatus: [
    {
      type: String,
      enum: ["Pending Billing", "Pending Collection", "Failed"],
      required: true,
    },
  ],
  collectionDate: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  buyerRating: {
    type: Number,
    required: true,
  },
};

const schema = new Schema(transactionSchema);

const Transaction = model("transaction", schema);

module.exports = Transaction;
