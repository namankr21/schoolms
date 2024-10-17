const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name :{
        type : String,
        unique:true,
        required:true,
    },
    gender :{
        type : String,
        required:true,
    },
    email :{
        type : String,
        unique:true,
        required:true,
    },
    phone :{
        type : String,
        unique:true,
        required:true,
    },
    address : {
        type : String,
        required : true
    },
    aadhar : {
        type : String,
        required : true
    },
    religion:{
        type : String,
        required: true,
    },
    dob : {
        type : Date,
        required : true
    },
    doj : { //date of joining
        type : Date,
        required : true
    },
    qualifications : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        required : true,
    },
    salary :{
        type : Number,
        required:true,
    },
    bank : {
        type : String,
        required : true
    }
})




