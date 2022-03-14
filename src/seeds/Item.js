require("dotenv").config();
const mongoose = require("mongoose");

const { Item } = require("../models");

const universities = require("./universities.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Item.deleteMany({});

    await Item.insertMany(Items);
    console.log("Items seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
