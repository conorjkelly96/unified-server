const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type University {
    name: String!
    courses: [String]
    addressLine1: String!
    addressLine2: String
    city: String!
    postcode: String!
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    interests: [String]
    university: University
    bio: String
    course: String
    sellerRating: Float
    friends: [Student]
  }

  type Staff {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    university: University
    college: String
  }

  type SignupStudentSuccess {
    student: Student!
  }

  type SignupStaffSuccess {
    staff: Staff!
  }

  type StudentAuth {
    token: ID!
    student: Student!
  }

  type StaffAuth {
    token: ID!
    staff: Staff!
  }

  input LoginStudentInput {
    email: String!
    password: String!
  }

  input LoginStaffInput {
    email: String!
    password: String!
  }

  input SignupStudentInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    interests: [String]
    university: String
    bio: String
    course: String
  }

  input SignupStaffInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    university: String
    college: [String]
  }

  type Query {
    dashboard: String!
  }

  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    loginStudent(input: LoginStudentInput!): StudentAuth!
    signupStaff(input: SignupStaffInput!): SignupStaffSuccess!
    loginStaff(input: LoginStaffInput!): StaffAuth!
  }
`;

module.exports = typeDefs;
