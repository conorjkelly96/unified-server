const { AuthenticationError } = require("apollo-server");

const { Staff } = require("../models");
const { signToken } = require("../utils");

const loginStaff = async (_, { input }, context) => {
  try {
    const staff = await Staff.findOne({ email: input.email });

    if (!staff) {
      console.log("[ERROR]: Failed to login | Staff does not exist");
      throw new AuthenticationError("Failed to login");
    }

    const isValidPassword = await staff.checkPassword(input.password);

    if (!isValidPassword) {
      console.log("[ERROR]: Failed to login | Incorrect password");
      throw new AuthenticationError("Failed to login");
    }

    return {
      token: signToken(staff),
      staff: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        username: staff.username,
      },
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    throw new AuthenticationError("Failed to login");
  }
};

module.exports = loginStaff;
