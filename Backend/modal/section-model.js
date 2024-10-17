const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    classId : {
        type : mongoose.Types.ObjectId,
        ref : "class"
    },
    teacherId : {
        type : mongoose.Types.ObjectId,
        ref : "teacher"
    },
    numofStu : {
        type : Number
    },
    students : [
        {
            type : mongoose.Types.ObjectId,
            ref : "student"
        }
    ],
  },{ timestamps: true }
);


module.exports = new mongoose.model("section",SectionSchema);
// an incharge will assign a particular section to a teacher
// and then when we click a tacher incharge can see how many classes each teacher have now
// when we click on subject to teach in a particular class then we can find the teachers name here 