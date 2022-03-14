require("dotenv").config();
const mongoose = require("mongoose");

const { Student } = require("../models");

const students = require("./students.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Student.deleteMany({});

    await student.insertMany(students);
    console.log("students seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
