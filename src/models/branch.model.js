
const mongoose = require('mongoose');
const express = require('express');

const branchSchema = new mongoose.Schema({

    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC :{type:String,required:true},
    MICR  :{type:String,required:true},
},{
    timestamps:true,
});

module.exports = mongoose.model('branch',branchSchema);
