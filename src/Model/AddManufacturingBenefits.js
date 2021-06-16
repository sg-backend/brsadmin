'use strict';
const Mongoose = require('mongoose');

let ManufacturingBenefitSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    Subtitle : { type:String, default:''},
  
})

const ManufacturingBenefitsModel = Mongoose.model("ManufacturingBenefits",ManufacturingBenefitSchema,"ManufacturingBenefits");

module.exports.ManufacturingBenefits = {
    ManufacturingBenefitsModel
};