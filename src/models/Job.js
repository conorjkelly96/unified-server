const { model, Schema } = require("mongoose");

const { formatDate } = require("../utils");

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
    maxLength: 2000,
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
    // get: formatDate,
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
};

const schema = new Schema(jobSchema, { timestamps: true, id: true });

const Job = model("Job", schema);

module.exports = Job;
