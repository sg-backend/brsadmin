'use strict';
const Promise = require('es6-promise');
const {Banner} = require('../Model/HomeBanner');

let AddHomeBanner = (request) => {
    let data = {
        Title : request.payload.Title,
        Subtitle : request.payload.Subtitle,
    }

    const promise = new Promise((resolve,reject)=> {
        Banner.HomeBannerModel.create(data, (err,data)=> {
            if(err) {
                reject(err);

            } else {
                let response_object = {
                    status_code : 201,
                    message: "Created ",
                    result : "Home Banner Created Successfully"
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



let ShowHomeBanner = () => {
    const promise = new Promise((resolve, reject)=>{
        Banner.HomeBannerModel.find({},(err,data)=> {
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



let UpdateHomeBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        Banner.HomeBannerModel.findByIdAndUpdate(request.params.id, request.payload,{new:true} ,(err,data) =>{
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


let DeleteHomeBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        Banner.HomeBannerModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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











module.exports.Banner = {
    AddHomeBanner,
    ShowHomeBanner,
    UpdateHomeBanner,
    DeleteHomeBanner,
}