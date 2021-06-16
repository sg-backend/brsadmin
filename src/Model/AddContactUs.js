'use strict';
const Mongoose = require('mongoose');

let ContactUsSchema = new Mongoose.Schema({
    First_Name : { type:String, default:''},
    Last_Name : { type:String, default:''},
    Email : { type:String, default:''},
    Phone_No : { type:Number, default:''},
    Subject : { type:String, default:''},
    Message : { type:String, default:''},
  

})

const ContactUsModel = Mongoose.model("ContactUs",ContactUsSchema,"ContactUs");

module.exports.ContactUs = {
    ContactUsModel
};