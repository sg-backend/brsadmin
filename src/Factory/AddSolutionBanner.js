'use strict';
const Promise = require('es6-promise');
const {SolutionBanner} = require('../Model/AddSolutionBanner');

let AddSolutionBanner = (request) => {
    let data = {
        Title : request.payload.Title,
        Subtitle : request.payload.Subtitle,
    }

    const promise = new Promise((resolve,reject)=> {
        SolutionBanner.SolutionBannerModel.create(data, (err,data)=> {
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



let ShowSolutionBanner = () => {
    const promise = new Promise((resolve, reject)=>{
        SolutionBanner.SolutionBannerModel.find({},(err,data)=> {
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



let UpdateSolutionBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        SolutionBanner.SolutionBannerModel.findByIdAndUpdate(request.params.id, request.payload,{new:true} ,(err,data) =>{
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


let DeleteSolutionBanner = (request) => {
    const promise = new Promise((resolve, reject) =>{
        SolutionBanner.SolutionBannerModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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











module.exports.SolutionBanner = {
    AddSolutionBanner,
    ShowSolutionBanner,
    UpdateSolutionBanner,
    DeleteSolutionBanner,
}