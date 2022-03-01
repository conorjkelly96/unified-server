const mongoose = require("mongoose");

const { User, ForumBoard, Item, Job } = require("../models");

const users = require("./seeds/users");
const forumboard = require("./seeds/forumboard");
const items = require("./seeds/items");
const jobs = require("./seeds/jobs");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/unifiedDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    await ForumBoard.deleteMany({});
    await ForumBoard.insertMany(forumboard);

    console.log("[INFO]: Successfully seeded thoughts");

    const usersFromDb = await User.find({});
    const forumboardFromDb = await forumboard.find({});

    // seed thoughts with users
    const forumBoardPromise = forumboardFromDb.map(async (thought) => {
      const username = thought.username;

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    const userIdsArray = usersFromDb.map((user) => user._id);

    // seed friends with users
    const friendsPromises = usersFromDb.map(async (user) => {
      // update operation on the friends and push it into the friends array
      const shuffledUserIds = userIdsArray.sort(() => 0.5 - Math.random());

      const slicedArray = shuffledUserIds.slice(
        Math.floor(Math.random() * shuffledUserIds.length)
      );

      const friends = slicedArray.filter((userId) => userId !== user._id);

      await User.findByIdAndUpdate(user._id, { friends });
    });

    await Promise.all(thoughtPromises);
    await Promise.all(friendsPromises);

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
