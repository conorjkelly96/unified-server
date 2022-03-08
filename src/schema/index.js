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

  type Query {
    jobs: [Job]
  }

  type Mutation {
    createJob(jobInput: CreateJobInput!): Job!
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
