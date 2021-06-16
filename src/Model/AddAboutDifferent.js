'use strict';
const Mongoose = require('mongoose');

let AboutDifferentSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const AboutDifferentModel = Mongoose.model("AboutDifferent",AboutDifferentSchema,"AboutDifferent");

module.exports.AboutDifferent = {
    AboutDifferentModel
};