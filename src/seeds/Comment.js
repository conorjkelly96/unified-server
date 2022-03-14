require("dotenv").config();
const mongoose = require("mongoose");

const { Comment } = require("../models");

const Comment = require("./Comment.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Comment.deleteMany({});

    await Comment.insertMany(ForumReply);
    console.log("Comment seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
