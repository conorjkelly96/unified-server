const { Schema } = require("mongoose");

const transactionSchema = {
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  transactionStatus: {
    type: String,
    enum: ["Pending Billing", "Pending Collection", "Failed"],
    required: true,
  },
  collectionDate: {
    type: Date,
    required: true,
  },
  //do we add cash or card options
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

module.exports = schema;
