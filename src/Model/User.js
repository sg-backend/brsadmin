'use strict'
const Mongoose = require('mongoose');

let userSchema = new Mongoose.Schema({
    email : { type : String, required : true, index: { unique : true}},
    mobile: { type: String},
    password: { type: String, required:true},


})

const UserModel = Mongoose.model("User",userSchema,"User");

module.exports.User = {
    UserModel,
   

};