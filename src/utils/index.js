const validateEmail = (email) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validEmail.test(email);
};

module.exports = {
  validateEmail,
};
