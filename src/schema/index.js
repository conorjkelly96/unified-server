const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Image {
    id: ID!
    imageUrl: String!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    interests: String!
    university: String!
    password: String!
    bio: String
    universityCourse: String!
    studentStatus: String!
    sellerRating: Number
    friends: [User]
  }
  type Comment {
    reactionId: ID!
    reactionBody: String!
    username: String!
    createdAt: Date
  }
  type ForumBoard {
    id: ID!
    username: String!
    postTitle: String!
    postText: String!
    # likes: [Like]
    # comment: [Comment]
    category: String!
    # createdAt: String!
    # updatedAt: String!
  }
  type Item {
    id: ID!
    itemName: String!
    itemDescription: String!
    category: String!
    status: String!
    condition: String!
    price: Number!
    quantity: Number!
    seller: String!
    images: [Image]
    transactions: [Transaction]
    # createdAt: String!
    # updatedAt: String!
  }
  type Job {
    id: ID!
    jobTitle: String!
    jobDescription: String!
    type: String!
    category: String!
    postDate: Date!
    department: String
    payRange: String
    closingDate: Date
    postedBy: User
    jobSkills: String!
    companyProfile: String!
    jobPostUrl: String!
  }
  type Transaction {
    id: ID!
    buyer: User
    transactionStatus: String!
    collectionDate: Date!
    paymentMethod: String!
    buyerRating: Number!
  }
  type Auth {
    token: ID!
    user: User!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input SignupInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    university: String!
    universityCourse: String!
    studentStatus: String!
  }
  input PostImageInput {
    title: String!
    description: String!
    imageUrl: String!
  }
  type Query {
    dashboard: User!
  }
  type Mutation {
    login(input: LoginInput!): Auth!
    signup(input: SignupInput!): Auth!
    postImage(input: PostImageInput!): User!
  }
`;

module.exports = typeDefs;
