const { AuthenticationError } = require("apollo-server");

const { Student } = require("../../models");
const { signToken } = require("../../utils");

const loginStudent = async (_, { input }, context) => {
  try {
    const student = await Student.findOne({ email: input.email });

    if (!student) {
      console.log("[ERROR]: Failed to login | Student does not exist");
      throw new AuthenticationError("Failed to login");
    }

    const isValidPassword = await student.checkPassword(input.password);

    if (!isValidPassword) {
      console.log("[ERROR]: Failed to login | Incorrect password");
      throw new AuthenticationError("Failed to login");
    }

    return {
      token: signToken(student),
      user: {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        username: student.username,
        type: "student",
      },
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    throw new AuthenticationError("Failed to login");
  }
};

module.exports = loginStudent;
