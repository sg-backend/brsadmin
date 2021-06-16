'use strict';
const Promise = require('es6-promise');
const {AboutBanner} = require('../Model/AddAboutBanner');

let AddAboutBanner = (request) => {
    let data = {
        Title : request.payload.Title,
        Subtitle : request.payload.Subtitle,
    }

    const promise = new Promise((resolve,reject)=> {
        AboutBanner.AboutBannerModel.create(data, (err,data)=> {
            if(err) {
                reject(err);

            } else {
                let response_object = {
                    status_code : 201,
                    message: "Created ",
                    result : "Solution Banner Created Successfully"
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



let ShowAboutBanner = () => {
    const promise = new Promise((resolve, reject)=>{
        AboutBanner.AboutBannerModel.find({},(err,data)=> {
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



let UpdateAboutBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        AboutBanner.AboutBannerModel.findByIdAndUpdate(request.params.id, request.payload,{new:true} ,(err,data) =>{
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


let DeleteAboutBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        AboutBanner.AboutBannerModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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











module.exports.AboutBanner = {
    AddAboutBanner,
    ShowAboutBanner,
    UpdateAboutBanner,
    DeleteAboutBanner,
}