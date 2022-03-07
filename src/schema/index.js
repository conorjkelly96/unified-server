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
    jobPostUrl: String,
    createdAt: String!
    department: String
    minPayRate: Number,
    maxPayRate: Number,
    closingDate: Date,
    postedBy: Staff!
    jobSkills: String,
}

  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;
