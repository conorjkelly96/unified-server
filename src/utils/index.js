const validatePrice = (price) => {
  return Math.round(price * 100) / 100;
};

const validateEmail = (email) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validEmail.test(email);
};

module.exports = {
  validatePrice,
  validateEmail,
};
