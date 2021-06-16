'use strict';
const Mongoose = require('mongoose');

let AboutUsSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const AboutUsModel = Mongoose.model("AboutUs",AboutUsSchema,"AboutUs");

module.exports.AboutUs = {
    AboutUsModel
};