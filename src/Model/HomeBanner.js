'use strict';
const Mongoose = require('mongoose');

let HomeBannerSchema = new Mongoose.Schema({
    Title : { type:String, default:''},
    Subtitle : { type:String, default:''},
  

})

const HomeBannerModel = Mongoose.model("HomeBanner",HomeBannerSchema,"HomeBanner");

module.exports.Banner = {
    HomeBannerModel
};