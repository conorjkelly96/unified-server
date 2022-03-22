// JOB Queries and Mutations
const createJob = require("./job/createJob");
const jobs = require("./job/jobs");
const job = require("./job/job");
const updateJob = require("./job/updateJob");
const deleteJob = require("./job/deleteJob");
const saveJob = require("./job/saveJob");
// const staffJobs = require("./job/staffJobs");
const removeSavedJobs = require("./job/removeSavedJobs");

const getStaffJobs = require("./job/getStaffJobs");

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
const getSingleItemData = require("./item/getSingleItemData");
const updateItem = require("./item/updateItem");
const getItemsByCategory = require("./item/getItemsByCategory");
const getCommentsOnMyItems = require("./comment/getCommentsOnMyItems");

// FORUM Queries and Mutations
const createForumPost = require("./forumPost/createForumPost");
const forumPosts = require("./forumPost/getAllForumPosts");
const forumReply = require("./forumPost/forumReply");
const getForumPost = require("./forumPost/getForumPost");
const updateForumPost = require("./forumPost/updateForumPost");
const deleteForumPost = require("./forumPost/deleteForumPost");

const resolvers = {
  Query: {
    colleges,
    universities,
    jobs,
    job,
    // staffJobs,
    viewAllItems,
    viewMyItems,
    getSingleItemData,
    getStaffJobs,
    getItemsByCategory,
    forumPosts,
    getForumPost,
    getCommentsOnMyItems,
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
    deleteForumPost,

    createJob,
    saveJob,
    deleteItem,
    updateItem,
    removeFromMyItems,
    saveToMyItems,
    removeCommentFromItem,
    addCommentToItem,
    removeSavedJobs,
    updateJob,
    deleteJob,
  },
};

module.exports = resolvers;
