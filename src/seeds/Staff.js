require("dotenv").config();
const mongoose = require("mongoose");

const { Staff } = require("../models");

const Staffs = require("./Staff.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Staff.deleteMany({});

    await Staff.insertMany(Staffs);
    console.log("Staff seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
