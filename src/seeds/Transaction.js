require("dotenv").config();
const mongoose = require("mongoose");

const { Transaction } = require("../models");

const Transaction = require("./Transaction.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Transaction.deleteMany({});

    await Transaction.insertMany(Transaction);
    console.log("Transaction seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
