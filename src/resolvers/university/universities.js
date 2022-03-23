const { University } = require("../../models");

const universities = async () => {
  const universities = await University.find({});

  return universities;
};

module.exports = universities;
