const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClassesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    classCode: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    schlId: {
      type: mongoose.Types.ObjectId,
    },
    section: [
        {
            type: mongoose.Types.ObjectId,
        }
    ],
    group: {
      type: String,
    },
    prefect: {
      type: String,
    },
    past: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("class", ClassesSchema);