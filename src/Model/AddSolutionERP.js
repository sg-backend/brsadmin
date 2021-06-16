'use strict';
const Mongoose = require('mongoose');

let SolutionERPSchema = new Mongoose.Schema({
    Icon : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const SolutionERPModel = Mongoose.model("SolutionERP",SolutionERPSchema,"SolutionERP");

module.exports.SolutionERP = {
    SolutionERPModel
};