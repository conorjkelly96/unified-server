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

  type Item {
    id: ID!
    itemName: String!
    itemDescription: String!
    category: String!
    status: String!
    condition: String!
    price: Int!
    seller: String!
    comments: String!
  }

  type SignupStudentSuccess {
    student: Student!
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
  }
`;

module.exports = typeDefs;
