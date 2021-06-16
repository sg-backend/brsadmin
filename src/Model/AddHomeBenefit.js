'use strict';
const Mongoose = require('mongoose');

let HomeBenefitSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    SubTitle : { type:String, default:''},
  
})

const HomeBenefitModel = Mongoose.model("HomeBenefit",HomeBenefitSchema,"HomeBenefit");

module.exports.HomeBenefit = {
    HomeBenefitModel
};