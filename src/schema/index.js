const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

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

  type Comment {
    commentId: ID!
    commentBody: String!
    username: String!
  }

  type Transaction {
    id: ID!
    buyer: Student!
    transactionStatus: String!
    collectionDate: Date!
    paymentMethod: String!
    buyerRating: Int!
  }

  type Item {
    id: ID!
    itemName: String!
    itemDescription: String!
    category: String!
    status: String!
    condition: String!
    price: Float!
    quantity: Int!
    seller: Student!
    comments: [Comment]
    images: [String]
    transactions: [Transaction]
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

  input CreateItemInput {
    itemName: String!
    itemDescription: String!
    category: String!
    condition: String!
    price: Float!
    quantity: Int
    images: [String]
  }

  type Query {
    dashboard: String!
  }

  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    createItem(input: CreateItemInput!): Item!
  }
`;

module.exports = typeDefs;
