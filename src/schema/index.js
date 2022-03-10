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
    university: University!
    college: String!
  }

  type Job {
    id: ID!
    jobTitle: String!
    jobDescription: String!
    type: String!
    jobPostUrl: String!
    createdAt: String!
    department: String
    minPayRate: Int
    maxPayRate: Int
    closingDate: String
    postedBy: Staff!
    jobSkills: String
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
    jobTitle: String!
    jobDescription: String!
    type: String!
    jobPostUrl: String!
    department: String
    minPayRate: Int!
    maxPayRate: Int!
    closingDate: String
    jobSkills: String
  }

  input UpdateJobInput {
    id: ID!
    jobTitle: String!
    jobDescription: String!
    type: String!
    jobPostUrl: String!
    department: String
    minPayRate: Int!
    maxPayRate: Int!
    closingDate: String
    jobSkills: String
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
    jobs: [Job]
  }

  # MUTATIONS
  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    loginStudent(input: LoginInput!): StudentAuth!
    signupStaff(input: SignupStaffInput!): SignupStaffSuccess!
    loginStaff(input: LoginInput!): StaffAuth!

    createJob(newJobInput: CreateJobInput!): Job!
    updateJob(jobInput: UpdateJobInput!): Job!

    createForumPost(forumPost: ForumPostInput!): ForumPost
  }
`;

module.exports = typeDefs;
