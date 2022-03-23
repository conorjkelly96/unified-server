require("dotenv").config();
const mongoose = require("mongoose");

const { University } = require("../models");

const universities = require("./data/universities.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await University.deleteMany({});

    await University.insertMany(universities);
    console.log("[INFO]: Universities seeded successfully");
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }

  process.exit(0);
};

seed();
