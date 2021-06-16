'use strict';
const Mongoose = require('mongoose');

let SolutionBannerSchema = new Mongoose.Schema({
    Title : { type:String, default:''},
    Subtitle : { type:String, default:''},
  

})

const SolutionBannerModel = Mongoose.model("SolutionBanner",SolutionBannerSchema,"SolutionBanner");

module.exports.SolutionBanner = {
    SolutionBannerModel
};