const { model, Schema } = require("mongoose");

// TODO: use this to format the createdAt date (see ForumPost model)
// const { formatDate } = require("../utils");

const jobSchema = {
  jobTitle: {
    type: String,
    required: true,
  },

  jobDescription: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500,
  },

  type: {
    type: String,
    enum: ["Internal", "External"],
    required: true,
  },

  jobPostUrl: {
    type: String,
    required: true,
  },

  //     //add category in the future
  // category: [
  //   {
  //     type: String,
  //     enum: ["", ""],
  //     required: true,
  //   },
  // ],

  department: {
    type: String,
  },

  // does this need additional validation for decimals?
  minPayRate: {
    type: Number,
    required: true,
    min: 0,
  },

  // does this need additional validation for decimals?
  // TODO: add validation that maxPayRate is larger than minPayRate
  maxPayRate: {
    type: Number,
    required: true,
    // validate: {}
  },

  closingDate: {
    type: Date,
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },

  //   make an enum?
  jobSkills: {
    type: String,
  },
};

const schema = new Schema(jobSchema, { timestamps: true, id: true });

const Job = model("Job", schema);

module.exports = Job;
