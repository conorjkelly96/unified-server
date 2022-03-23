require("dotenv").config();
const mongoose = require("mongoose");

const { University } = require("../models");
const { Comment } = require("../models");
const { Student } = require("../models");
const { Staff } = require("../models");
const { Item } = require("../models");
const { Transaction } = require("../models");
const { Job } = require("../models");
const { ForumPost } = require("../models");
const { ForumReply } = require("../models");

const universities = require("./data/universities.json");
const students = require("./data/students.json");
const comments = require("./data/comments.json");
const staffs = require("./data/staffs.json");
const items = require("./data/items.json");
const transactions = require("./data/transactions.json");
const Jobs = require("./data/jobs.json");
const forumPosts = require("./data/forumPosts.json");
const forumReplies = require("./data/forumReplies.json");

const seed = async () => {
  const randomIndex = (number) => {
    return Math.floor(Math.random() * number);
  };
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await University.deleteMany({});
    await Student.deleteMany({});
    await Staff.deleteMany({});
    await Item.deleteMany({});
    await Job.deleteMany({});
    await ForumPost.deleteMany({});

    await University.insertMany(universities);
    console.log("[INFO]: Universities seeded successfully");

    await Student.insertMany(students);
    console.log("[INFO]: Students seeded successfully");

    await Staff.insertMany(staffs);
    console.log("[INFO]: Staffs seeded successfully");

    const studentsFromDb = await Student.find({});

    const finalTransactions = transactions.map((transaction) => {
      return {
        ...transaction,
        buyer: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
        collectionDate: new Date(),
      };
    });

    const itemsToSeed = items.map((item) => {
      return {
        ...item,
        transactions: finalTransactions,
        comments,
      };
    });

    await Item.insertMany(itemsToSeed);
    console.log("[INFO]: Items seeded successfully");

    await Job.insertMany(Jobs);
    console.log("[INFO]: Jobs seeded successfully");

    const forumPostsToSeed = forumPosts.map((forumPost) => {
      return {
        ...forumPost,
        replies: forumReplies,
      };
    });

    await ForumPost.insertMany(forumPostsToSeed);
    console.log("[INFO]: ForumPosts seeded successfully");
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }

  process.exit(0);
};

seed();
