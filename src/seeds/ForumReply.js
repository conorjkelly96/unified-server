require("dotenv").config();
const mongoose = require("mongoose");

const { ForumReply } = require("../models");

const ForumReply = require("./ForumReply.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await ForumReply.deleteMany({});

    await ForumReply.insertMany(ForumReply);
    console.log("ForumReply seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
