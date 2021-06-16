'use strict';
const Mongoose = require('mongoose');

let HomeServiceSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const HomeServiceModel = Mongoose.model("HomeService",HomeServiceSchema,"HomeService");

module.exports.HomeService = {
    HomeServiceModel
};