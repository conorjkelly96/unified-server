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

  type SignupStudentSuccess {
    student: Student!
  }

  type Auth {
    token: ID!
    student: Student!
  }

  input LoginStudentInput {
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

  type Query {
    dashboard: String!
  }

  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    loginStudent(input: LoginStudentInput!): Auth!
  }
`;

module.exports = typeDefs;
