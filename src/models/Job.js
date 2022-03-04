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
      maxLength: 500,
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
      //add category in the future
      enum: ["", ""],
      required: true,
    },
  ],
  postDate: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
  },
  //do we add options here?
  payRange: {
    type: String,
  },
  closingDate: {
    type: Date,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
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
