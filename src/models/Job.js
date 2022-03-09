const { model, Schema } = require("mongoose");

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

  // category: [
  //   {
  //     type: String,
  //     //add category in the future
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
  maxPayRate: {
    type: Number,
    required: true,
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

const Job = model("job", schema);

module.exports = Job;
