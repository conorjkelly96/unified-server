require("dotenv").config();
const mongoose = require("mongoose");

const {
  University,
  Comment,
  Student,
  Staff,
  Item,
  Transaction,
  Job,
  ForumPost,
  ForumReply,
} = require("../models");

const universities = require("./data/universities.json");
const students = require("./data/students.json");
const comments = require("./data/commentsData.json");
const staffs = require("./data/staffs.json");
const items = require("./data/itemsData.json");
const transactions = require("./data/transactions.json");
const jobs = require("./data/jobs.json");
const forumPosts = require("./data/forumPosts.json");
const forumReplies = require("./data/forumReplies.json");

const seed = async () => {
  const randomIndex = (number) => {
    return Math.floor(Math.random() * number);
  };
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        `mongodb://localhost:27017/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("[INFO]: Database connection successful");

    await University.deleteMany({});
    await Student.deleteMany({});
    await Staff.deleteMany({});
    await Item.deleteMany({});
    await Job.deleteMany({});
    await ForumPost.deleteMany({});

    await University.insertMany(universities);
    console.log("[INFO]: Universities seeded successfully");

    const universitiesFromDb = await University.find({});

    const staffToSeed = staffs.map((staff) => {
      return {
        ...staff,
        university:
          universitiesFromDb[randomIndex(universitiesFromDb.length)]._id,
      };
    });

    const staffPromises = staffToSeed.map((staff) => {
      return Staff.create(staff);
    });

    await Promise.all(staffPromises);

    console.log("[INFO]: Staffs seeded successfully");

    const staffFromDb = await Staff.find({});
    const jobsToSeed = jobs.map((job) => {
      return {
        ...job,
        postedBy: staffFromDb[randomIndex(staffFromDb.length)]._id,
        closingDate: new Date(),
      };
    });

    await Job.insertMany(jobsToSeed);
    console.log("[INFO]: Jobs seeded successfully");

    const jobsFromDb = await Job.find({});

    const studentsToSeed = students.map((student) => {
      return {
        ...student,
        university:
          universitiesFromDb[randomIndex(universitiesFromDb.length)]._id,
        savedJobs: [jobsFromDb[randomIndex(jobsFromDb.length)]._id],
      };
    });

    const studentPromises = studentsToSeed.map((student) => {
      return Student.create(student);
    });

    await Promise.all(studentPromises);
    console.log("[INFO]: Students seeded successfully");

    const studentsFromDb = await Student.find({});

    const finalTransactions = transactions.map((transaction) => {
      return {
        ...transaction,
        buyer: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
        collectionDate: new Date(),
      };
    });

    const commentsToSeed = comments.map((comment) => {
      return {
        ...comment,
        username: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
      };
    });

    const itemsToSeed = items.map((item) => {
      return {
        ...item,
        transactions: finalTransactions,
        comments: commentsToSeed,
        seller: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
      };
    });

    await Item.insertMany(itemsToSeed);
    console.log("[INFO]: Items seeded successfully");

    const forumRepliesToSeed = forumReplies.map((reply) => {
      return {
        ...reply,
        user: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
      };
    });

    const forumPostsToSeed = forumPosts.map((forumPost) => {
      return {
        ...forumPost,
        replies: forumRepliesToSeed,
        postedBy: studentsFromDb[randomIndex(studentsFromDb.length)]._id,
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
