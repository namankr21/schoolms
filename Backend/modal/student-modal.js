const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    schlId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "school"
    },
    admisnID : {
        type : Number,
        required : true,
        unique : true
    },
    edunum : {
        type : Number,
        required : true,
        unique : true
    },
    class : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "class"
    },
    sec : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "section",
    },
    admisnDate : {
        type : Date,
    },
    dob : {
        type : Date,
        
    },
    feeType : {
        type : mongoose.Types.ObjectId,
    },
    firstName : {
        type : String,
        required : true,
        trim : true
    },
    middleName : {
        type : String,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male","female","others"]
    },
    prsnlcontact : {
        type : Number,
    },
    smsWhatsAppNum : {
        type : Number,
        required : true,
    },
    fatherName : {
        type : String,
        trim : true,
        required : true,
    },
    motherName : {
        type : String,
        trim : true,
        required : true,
    },
    fatherMobile : {
        type : Number,
    },
    motherMobile : {
        type : Number,
    },
    stream : {
        type : mongoose.Types.ObjectId,
    },
    house : {
        type : mongoose.Types.ObjectId,
    },
    studentStatus : {
        type : String,
        required : true
    },
    tcNum : {
        type : String,
        trim : true,
    },
    manualTcNum : {
        type : String,
        trim : true,
    },
    isActive : {
        type : Boolean,
    },
    presentAdd : {
        type : String,
        trim : true,
    },
    permanantAdd : {
        type : String,
        trim : true,
    },
    city : {
        type : String,
        trim : true,
    },
    postalCode : {
        type : String,
        trim : true,
    },
    country : {
        type : String,
        trim : true,
    },
    cnctprsnphone : {
        type : Number,
    },
    cnctprsnemail : {
        type : String,
        trim : true,
    },
    cnctprsnadd : {
        type : String,
        trim : true,
    },
    nationality: {
        type: String,
        trim : true
    },
    religion: {
        type: String,
        trim : true
    },
    email: {
        type: String,
        trim : true
    },
    category : {
        type: String,
        trim : true
    },
    cast : {
        type: String,
        trim : true
    },
    aahdaarNum : {
        type : Number,
    },
    prevSchl : {
        type: String,
        trim : true
    },
    refBy : {
        type: String,
        trim : true
    },
    udiesNum : {
        type : Number,
    },
    bloodgrp : {
        type : String,
        enum : ["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    height : {
        type : Number,
    },
    weight : {
        type : Number,
    },
    admittedClass : {
        type : Number,
    },
    stdntSamagrID : {
        type : Number
    },
    tenthRollnum : {
        type : Number,
    },
    tenthPassYear : {
        type : String,
        trim : true
    },
    tenthBoardName : {
        type : String,
        trim : true
    },
    isPhyChal : {
        type : Boolean,
        required : true,
    }
},{timestamps:true});


module.exports = new mongoose.model("student",StudentSchema);

