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

    # Should this be required?
    college: String
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
    postedBy: Staff
    jobSkills: String
  }

  type SignupStudentSuccess {
    student: Student!
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

    # check that staff data populates!! Should this be an ID instead of String?
    postedBy: String

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

    # check that staff data populates!! Should this be an ID instead of String?
    postedBy: String

    jobSkills: String
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

  # QUERIES
  type Query {
    dashboard: String!
    jobs: [Job]
  }

  # MUTATIONS
  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    createJob(newJobInput: CreateJobInput!): Job!
    updateJob(jobInput: UpdateJobInput!): Job!
  }
`;

module.exports = typeDefs;
