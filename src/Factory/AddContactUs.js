'use strict';
const Promise = require('es6-promise');
const {ContactUs} = require('../Model/AddContactUs');

let AddContactUs = (request) => {
    let data = {
        First_Name : request.payload.First_Name,
        Last_Name : request.payload.Last_Name,
        Email : request.payload.Email,
        Phone_No : request.payload.Phone_No,
        Subject : request.payload.Subject,
        Message : request.payload.Message,
    }

    const promise = new Promise((resolve,reject)=> {
        ContactUs.ContactUsModel.create(data, (err,data)=> {
            if(err) {
                reject(err);

            } else {
                let response_object = {
                    status_code : 201,
                    message: "Created ",
                    result : "Contact Us Created Successfully"
                }
                // let response_object = (
                //     '<script>window.alert("Applied successfully");window.location="http://localhost:3000/#/reports/expense-report";</script>'
                //   );
                resolve(response_object);
            }
        })
    })
return promise;
}



let ShowContactUs = () => {
    const promise = new Promise((resolve, reject)=>{
        ContactUs.ContactUsModel.find({},(err,data)=> {
            if(err){
                reject(err);
            } else {
                let response_object = {
                    status_code : 200,
                    message : "Show",
                    result : data
                }
                resolve(response_object);
            }
        })
    })
    return promise;
}


let DeleteContactUs = (request) => {
    const promise = new Promise((resolve, reject) =>{
        ContactUs.ContactUsModel.findByIdAndDelete(request.params.id ,(err,data) =>{
            if(err){
                reject(err);
            }else{
                let response_object = {
                    data:data
                }
                resolve(response_object);
            }
        })
    })
    return promise;
}




module.exports.ContactUs = {
    AddContactUs,
    ShowContactUs,
    DeleteContactUs,
}