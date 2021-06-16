'use strict';
const Mongoose = require('mongoose');

let HomePackageSchema = new Mongoose.Schema({
    Package_Title : { type:String, default:''},
    Package_Subtitle : { type:String, default:''},
    Price : { type:String, default:''},
    Package_Description : { type:String, default:''},
  

})

const HomePackagesModel = Mongoose.model("Homepackage",HomePackageSchema,"Homepackage");

module.exports.HomePackages = {
    HomePackagesModel
};