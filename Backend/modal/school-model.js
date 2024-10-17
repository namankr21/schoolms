const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    schoolID : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true,
        unique : true,
    },
    code : {
        type : Number,
        required : true,
        unique : true,
    },
    udies : {
        type : String,
        trim : true
    },
    affiliation : {
        type : Number,
    },
    category:{
        type : String,
        default : "independent",
        enum : ["indenpendent","semi-gov","gov"]
    },
    stype : {
        type : String,
        enum : ["Pre-Primary","Primary","Secondary","Senior-Secondary"]
    },
    place : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    pincode : {
        type : Number,
        required : true,
    },
    phoneNumber : [
        {
            type : Number,
        }
    ],
    fax : {
        type : String,
        trim:true,
    },
    website : {
        type : String,
        trim:true,
    },
    email : {
        type : String,
        trim:true,
    },
    board : {
        type : String,
        trim:true,
        required : true,
    },
    TCRenewUpto : {
        type : Date,
    },
    minAge : {
        type : Number,
    },
    TcTitile : {
        type : String
    },
    logos : [
        {
            type : String,
        }
    ],
    socialMedia : [
        {
            type : String,
        }
    ],

})

module.exports = new mongoose.model("school",SchoolSchema);

