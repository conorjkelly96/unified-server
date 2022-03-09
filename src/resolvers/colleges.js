const { University } = require("../models");

const colleges = async (_, { id }) => {
  const { colleges } = await University.findById(id);

  return colleges;
};

module.exports = colleges;
