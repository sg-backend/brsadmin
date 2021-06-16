'use strict';
const Mongoose = require('mongoose');

let SolutionWhatWeDoSchema = new Mongoose.Schema({
    Icon : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const SolutionWhatWeDoModel = Mongoose.model("SolutionWhatWeDo",SolutionWhatWeDoSchema,"SolutionWhatWeDo");

module.exports.SolutionWhatWeDo = {
    SolutionWhatWeDoModel
};