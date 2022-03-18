const { University } = require("../../models");

const colleges = async (_, { id }) => {
  const university = await University.findById(id);

  return university;
};

module.exports = colleges;
