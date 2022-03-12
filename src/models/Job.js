const { model, Schema } = require("mongoose");

// TODO: use this to format the createdAt date (see ForumPost model)
// const { formatDate } = require("../utils");

const jobSchema = {
  title: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500,
  },

  url: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    default: "N/A",
  },

  closingDate: {
    type: Date,
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },
};

const schema = new Schema(jobSchema, { timestamps: true, id: true });

const Job = model("Job", schema);

module.exports = Job;
