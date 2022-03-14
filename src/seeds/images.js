require("dotenv").config();
const mongoose = require("mongoose");

const { Images } = require("../models");

const Images = require("./Images.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Images.deleteMany({});

    await Images.insertMany(Images);
    console.log("Images seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
