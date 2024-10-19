const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectclasslinkSchema = new Schema(
  {
    subId: {
      type: mongoose.Types.ObjectId,
      ref: "class",
    },
    classId: {
      type: mongoose.Types.ObjectId,
      ref: "class",
    },
    teacherId: {
      type: mongoose.Types.ObjectId,
      ref: "teacher",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("subclasslink", subjectclasslinkSchema);
// an incharge will assign a particular section to a teacher
// and then when we click a tacher incharge can see how many classes each teacher have now
// when we click on subject to teach in a particular class then we can find the teachers name here
