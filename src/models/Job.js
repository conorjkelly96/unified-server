const { model, Schema } = require("mongoose");

const jobSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: [
    {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 100,
    },
  ],
  type: [
    {
      type: String,
      enum: ["Internal", "External"],
      required: true,
    },
  ],
  category: [
    {
      type: String,
      enum: ["", ""],
      required: true,
    },
  ],
  joiningDate: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
  },
  payRange: {
    type: String,
  },
  closingDate: {
    type: Date,
  },
  postedBy: {
    type: String,
    required: true,
  },
  jobSkills: {
    type: String,
    required: true,
  },
  companyProfile: {
    type: String,
    required: true,
  },
  jobPostUrl: {
    type: String,
    required: true,
  },
};

const schema = new Schema(jobSchema);

const Job = model("job", schema);

module.exports = Job;
