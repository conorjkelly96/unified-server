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
    university: University
    bio: String
    interests: [String]
    college: String
    sellerRating: Float
    friends: [Student]
    savedJobs: [Job]
    savedItem: [Item]
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
    success: Boolean!
    student: Student
  }

  type StudentAuth {
    token: ID!
    user: Student!
  }

  type StaffAuth {
    token: ID!
    user: Staff!
  }

  type Reply {
    id: ID!
    text: String!
    user: String!
    createdAt: String
  }

  type ForumPost {
    id: ID!
    postText: String!
    postedBy: Student!
    createdAt: String!
    replies: [Reply]
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
    university: String!
    college: String!
    bio: String
    interests: [String]
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

  input UpdateItemInput {
    itemName: String!
    itemDescription: String!
    category: String!
    condition: String!
    price: Float!
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

  input ForumReplyInput {
    text: String!
  }

  input ItemCommentInput {
    commentBody: String!
    itemId: String!
  }

  # QUERIES
  type Query {
    dashboard: String!
    colleges(id: ID!): University!
    universities: [University]!
    jobs: [Job]
    job(jobId: ID!): Job!
    staffJobs: [Job]
    viewAllItems: [Item]
    viewMyItems: [Item]
    getSingleItemData(id: ID!): Item
    forumPosts: [ForumPost]
    getForumPost(postId: ID!): ForumPost
    getStaffJobs: [Job]
  }

  # MUTATIONS
  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    loginStudent(input: LoginInput!): StudentAuth!

    deleteItem(itemId: String!): Item
    createItem(input: CreateItemInput!): Item!
    updateItem(itemId: String!, input: UpdateItemInput!): Item
    removeFromMyItems(itemId: String!): Item
    saveToMyItems(itemId: String!): Item
    removeCommentFromItem(itemId: String!, Comment: ID!): Item
    addCommentToItem(input: ItemCommentInput): Item

    createJob(newJobInput: CreateJobInput!): Job!
    updateJob(jobInput: UpdateJobInput!, jobId: ID!): Job!
    deleteJob(jobId: ID!): Job
    saveJob(jobId: ID!): Student!

    signupStaff(input: SignupStaffInput!): SignupStaffSuccess!
    loginStaff(input: LoginInput!): StaffAuth!

    createForumPost(forumPost: ForumPostInput!): ForumPost
    removeSavedJobs(jobId: ID!): Student
    forumReply(input: ForumReplyInput, postId: ID!): ForumPost
    updateForumPost(id: ID!, input: ForumPostInput!): ForumPost
    deleteForumPost(id: ID!): ForumPost
  }
`;

module.exports = typeDefs;
