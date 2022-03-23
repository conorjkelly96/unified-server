const { Tag } = require("../models");

const tags = async () => {
  const tags = await Tag.find({});
  return tags;
};

module.exports = tags;
