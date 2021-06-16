'use strict';
const Mongoose = require('mongoose');

let AboutWhatWeDoSchema = new Mongoose.Schema({
    Image : { type:String, default:''},
    Title : { type:String, default:''},
    Description : { type:String, default:''},
  
})

const AboutWhatWeDoModel = Mongoose.model("AboutWhatWeDo",AboutWhatWeDoSchema,"AboutWhatWeDo");

module.exports.AboutWhatWeDo = {
    AboutWhatWeDoModel
};