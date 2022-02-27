const { model, Schema } = require("mongoose");

const jobSchema = {
  _id: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobDescription: [
    {
      type: String,
    },
  ],
  type: {
    type: Number,
  },
  category: {
    type: String,
  },
  joiningDate: {
    type: String,
  },
  department: {
    type: String,
  },
  payRange: {
    type: String,
  },
  closingDate: { createdAt: "joinDate" },
  postedBy: {
    type: String,
  },
  jobSkills: {
    type: String,
  },
  companyProfile: {
    type: String,
  },
  jobPostUrl: {
    type: String,
  },
};

const schema = new Schema(jobSchema);

const Job = model("job", schema);

module.exports = Job;
