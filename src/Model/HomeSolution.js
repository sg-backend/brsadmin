'use strict';
const Mongoose = require('mongoose');

let HomeSolutionSchema = new Mongoose.Schema({
    Icon_Image : { type:String, default:''},
    Icon_Name : { type:String, default:''},
  
})

const HomeSolutionModel = Mongoose.model("HomeSolution",HomeSolutionSchema,"HomeSolution");

module.exports.HomeSolution = {
    HomeSolutionModel
};