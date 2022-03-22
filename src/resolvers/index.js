// JOB Queries and Mutations
const createJob = require("./job/createJob");
const jobs = require("./job/jobs");
const job = require("./job/job");
const updateJob = require("./job/updateJob");
const deleteJob = require("./job/deleteJob");
const saveJob = require("./job/saveJob");
const removeSavedJobs = require("./job/removeSavedJobs");

const getStaffJobs = require("./job/getStaffJobs");

// STUDENT and STAFF AUTH Queries and Mutations
const signupStudent = require("./signupStudent");
const loginStudent = require("./loginStudent");
const signupStaff = require("./signupStaff");
const loginStaff = require("./loginStaff");

// UNIVERSITY Queries and Mutations
const colleges = require("./colleges");
const universities = require("./universities");

// ITEM Queries and Mutations
const createItem = require("./createItem");

// FORUM Queries and Mutations
const createForumPost = require("./forumPost/createForumPost");
const forumPosts = require("./forumPost/getAllForumPosts");
const forumReply = require("./forumPost/forumReply");
const getForumPost = require("./forumPost/getForumPost");
const getStudentJobs = require("./job/getStudentJobs");
const updateForumPost = require("./forumPost/updateForumPost");
const updateForumReply = require("./forumPost/updateForumReply");
const deleteForumPost = require("./forumPost/deleteForumPost");
const deleteForumReply = require("./forumPost/deleteForumReply");

const resolvers = {
  Query: {
    colleges,
    universities,

    jobs,
    job,
    getStaffJobs,
    getStudentJobs,

    forumPosts,
    getForumPost,
  },

  Mutation: {
    signupStudent,
    signupStaff,
    loginStudent,
    loginStaff,

    createItem,

    createForumPost,
    forumReply,
    updateForumPost,
    updateForumReply,
    deleteForumPost,
    deleteForumReply,

    createJob,
    saveJob,
    removeSavedJobs,
    updateJob,
    deleteJob,
  },
};

module.exports = resolvers;
