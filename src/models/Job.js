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
    ref: "staff",
    required: true,
  },

  //   make an enum?
  jobSkills: {
    type: String,
    required: true,
  },
  //   what is this one?
  //   companyProfile: {
  //     type: String,
  //     required: true,
  //   },

  // for external postings
  jobPostUrl: {
    type: String,
    required: true,
  },
};

const schema = new Schema(jobSchema);

const Job = model("job", schema);

module.exports = Job;
