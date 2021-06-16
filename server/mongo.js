'use strict';

const Mongoose = require('mongoose');

const mongo = () => {
    Mongoose.connect("mongodb://localhost:27017/brs_infotech", 
    
    { useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex : true } ,(err,data)=> {
        if(err) {
            throw err;
        } else {
            console.log("MongoDB Server Started Successfully")
        }
    })
}


module.exports = mongo;
