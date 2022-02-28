const validatePrice = (price) => {
  return Math.round(price * 100) / 100;
};

module.exports = {
  validatePrice,
};
