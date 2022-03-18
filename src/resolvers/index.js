// JOB Queries and Mutations
const createJob = require("./job/createJob");
const jobs = require("./job/jobs");
const job = require("./job/job");
const updateJob = require("./job/updateJob");
const deleteJob = require("./job/deleteJob");
const saveJob = require("./job/saveJob");
const staffJobs = require("./job/staffJobs");

// STUDENT and STAFF AUTH Queries and Mutations
const signupStudent = require("./student/signupStudent");
const loginStudent = require("./student/loginStudent");
const signupStaff = require("./staff/signupStaff");
const loginStaff = require("./staff/loginStaff");

// UNIVERSITY Queries and Mutations
const colleges = require("./university/colleges");
const universities = require("./university/universities");

// ITEM Queries and Mutations
const deleteItem = require("./item/deleteItem");
const createItem = require("./item/createItem");
const viewAllItems = require("./item/viewAllItems");
const viewMyItems = require("./item/viewMyItems");
const removeFromMyItems = require("./item/removeFromMyItems");
const saveToMyItems = require("./item/saveToMyItems");
const removeCommentFromItem = require("./item/removeCommentFromItem");
const addCommentToItem = require("./item/addCommentToItem");

// FORUM Queries and Mutations
const createForumPost = require("./forumPost/createForumPost");

const resolvers = {
  Query: {
    colleges,
    universities,
    jobs,
    job,
    staffJobs,
    viewAllItems,
    viewMyItems,
  },
  Mutation: {
    createJob,
    signupStudent,
    createItem,
    updateJob,
    deleteJob,
    signupStaff,
    loginStudent,
    loginStaff,
    createForumPost,
    saveJob,
    deleteItem,
    removeFromMyItems,
    saveToMyItems,
    removeCommentFromItem,
    addCommentToItem,
  },
};

module.exports = resolvers;
