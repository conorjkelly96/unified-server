const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type University {
    id: ID
    name: String
    courses: [String]
    addressLine1: String
    addressLine2: String
    city: String
    postcode: String
    colleges: [String]
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
    price: Int!
    quantity: Int!
    seller: Student!
    comments: [Comment]
    images: [String]
    transactions: [Transaction]
  }

  type Staff {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    university: University!
    college: String!
  }

  type Job {
    id: ID!
    title: String!
    company: String!
    description: String!
    url: String!
    createdAt: String!
    salary: String
    closingDate: String
    postedBy: Staff!
  }

  type SignupStudentSuccess {
    student: Student!
  }

  type StudentAuth {
    token: ID!
    student: Student!
  }

  type StaffAuth {
    token: ID!
    staff: Staff!
  }

  type ForumPost {
    postText: String!
    postedBy: Student!
    createdAt: String!
    replies: [String]
  }

  # INPUTS
  input CreateJobInput {
    title: String!
    company: String!
    description: String!
    url: String!
    salary: String!
    closingDate: String
  }

  input UpdateJobInput {
    title: String!
    description: String!
    url: String!
    salary: String!
    closingDate: String
  }

  type SignupStaffSuccess {
    success: Boolean!
    staff: Staff
  }

  input LoginInput {
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

  input CreateItemInput {
    itemName: String!
    itemDescription: String!
    category: String!
    condition: String!
    price: Int!
    quantity: Int
    images: [String]
  }

  input SignupStaffInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    university: ID!
    college: String!
  }

  input ForumPostInput {
    postText: String!
  }

  # QUERIES
  type Query {
    dashboard: String!
    colleges(id: ID!): University!
    universities: [University]!
    jobs: [Job]
    job(jobId: ID!): Job!
  }

  # MUTATIONS
  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    createItem(input: CreateItemInput!): Item!
    loginStudent(input: LoginInput!): StudentAuth!

    createJob(newJobInput: CreateJobInput!): Job!
    updateJob(jobInput: UpdateJobInput!, jobId: ID!): Job!
    deleteJob(jobId: ID!): Job

    signupStaff(input: SignupStaffInput!): SignupStaffSuccess!
    loginStaff(input: LoginInput!): StaffAuth!

    createForumPost(forumPost: ForumPostInput!): ForumPost
  }
`;

module.exports = typeDefs;
