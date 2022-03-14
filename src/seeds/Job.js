require("dotenv").config();
const mongoose = require("mongoose");

const { Job } = require("../models");

const Jobs = require("./Jobs.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Job.deleteMany({});

    await Job.insertMany(Jobs);
    console.log("Jobs seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
