'use strict';
const Mongoose = require('mongoose');

let AboutBannerSchema = new Mongoose.Schema({
    Title : { type:String, default:''},
    Subtitle : { type:String, default:''},
  

})

const AboutBannerModel = Mongoose.model("AboutBanner",AboutBannerSchema,"AboutBanner");

module.exports.AboutBanner = {
    AboutBannerModel
};