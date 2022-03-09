const { University } = require("../models");

const universities = async () => {
  const universities = await University.find({});
  console.log(universities);

  return universities;
};

module.exports = universities;
