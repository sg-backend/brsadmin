'use strict';

const Promise = require('es6-promise')
const { User } = require('../Model/User')
// const Bcrypt = require('bcrypt');
// const moment  = require('moment');
// const jwt  = require('jsonwebtoken');
// const { resolve } = require('bluebird');



let userSignUp = (request) => {

    // console.log("Request Payload => ", request.payload);

    let user_data = {
 
        email: request.payload.email,
        mobile: request.payload.mobile,
        password: request.payload.password,

    };

    const promise = new Promise((resolve, reject) => {
        User.UserModel.findOne({
            email: request.payload.email,
            mobile: request.payload.mobile,
            password: request.payload.password,
        }, (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
                // console.log("Data", data);
                let response_object = {
                    status_code: 409,
                    message: "Conflict",
                    result: "User Already Exits"
                }

                resolve(response_object);

            } else {
                User.UserModel.create(user_data, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        // let response_object = {
                        //     status_code: 200,
                        //     message: "Created",
                        //     result: "User Signup SuccessFully"
                        // }
                        let response_object = (

                            '<script>window.alert("User Created successfully");window.location="http://nahatasports.cnctech.in/#/login";</script>'
                          
                          );
                        resolve(response_object);
                    }
                })
            }
        })
    })
    return promise;
}




let userLogin = (request) => {

    // console.log("Request Payload => ", request.payload);

    let user_data = {
 
        email: request.payload.email,
        password: request.payload.password,

    };

    const promise = new Promise((resolve, reject) => {
        User.UserModel.findOne({
            email: request.payload.email,
            password: request.payload.password,
        }, (err, success) => {
            if (err) {
                reject(err);
            }
            if (success) {
                
                // let lastlogintime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                //                             let token = jwt.sign(
                //                                 {
                //                                     email: success.email,
                //                                     password: success.password,
                //                                 }, '!*(*SECRET*@*@');
                
                // console.log("Data", data);
                // let response_object = {
                //     status_code: 200,
                //             message: "Login",
                //             result: "User Login SuccessFully"
                // }
                let response_object = (
                    '<script>window.alert("Login successfully");window.location="http://nahatasports.cnctech.in/#/dashboard";</script>'
                  );
                resolve(response_object);

            } else {
                User.UserModel.findOne(user_data, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        // let response_object = {
                        //     status_code: 200,
                        //     message: "Conflicts",
                        //     result: "User Not Registered"
                        // }
                        let response_object = (
                            '<script> window.location="http://nahatasports.cnctech.in/#/login";</script>'
                          );
                        resolve(response_object);
                    }
                })
            }
        })
    })
    return promise;
}






module.exports.User = {
    userSignUp,
    userLogin
 
}