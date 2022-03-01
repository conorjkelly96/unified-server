const mongoose = require("mongoose");

const { User, ForumBoard, Item, Job } = require("../models");

const users = require("./seeds/users");
const forumboard = require("./seeds/forumboard");
const items = require("./seeds/items");
const jobs = require("./seeds/jobs");

const init = async () => {
  try {
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
