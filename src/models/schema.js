const mongoose = require("mongoose");
const validator = require("validator");

//-----------   createSchema    -----------//
const olympicSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    medal:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

//-----------   createCollection    -----------//
const OlympicDetail = new mongoose.model("OlympicDetail",olympicSchema);

module.exports= OlympicDetail;
