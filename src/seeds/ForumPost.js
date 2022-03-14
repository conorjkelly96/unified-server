require("dotenv").config();
const mongoose = require("mongoose");

const { ForumPost } = require("../models");

const ForumPost = require("./ForumReply.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await ForumPost.deleteMany({});

    await ForumPost.insertMany(ForumReply);
    console.log("ForumReply seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
