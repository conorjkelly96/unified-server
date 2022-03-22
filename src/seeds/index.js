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

const universities = require("./universities.json");
const students = require("./students.json");
const comments = require("./Comments.json");
const Staffs = require("./Staff.json");
const items = require("./Items.json");
const transactions = require("./Transaction.json");
const Jobs = require("./Jobs.json");
const forumPosts = require("./ForumReply.json");
const forumReplies = require("./ForumReply.json");

const seed = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await University.deleteMany({});
    await University.insertMany(universities);
    console.log("Universities seeded successfully");

    await Comment.deleteMany({});
    await Comment.insertMany(comments);
    console.log("Comment seeded successfully");

    await Student.deleteMany({});
    await Student.insertMany(students);
    console.log("students seeded successfully");

    await Staff.deleteMany({});
    await Staff.insertMany(Staffs);
    console.log("Staff seeded successfully");

    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log("Items seeded successfully");

    await Transaction.deleteMany({});
    await Transaction.insertMany(transactions);
    console.log("Transaction seeded successfully");

    await Job.deleteMany({});
    await Job.insertMany(Jobs);
    console.log("Jobs seeded successfully");

    await ForumPost.deleteMany({});
    await ForumPost.insertMany(forumPosts);
    console.log("ForumPosts seeded successfully");

    await ForumReply.deleteMany({});
    await ForumReply.insertMany(forumReplies);
    console.log("ForumReply seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
