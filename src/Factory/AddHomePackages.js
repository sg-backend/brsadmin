'use strict';
const Promise = require('es6-promise');
const {HomePackages} = require('../Model/AddHomePackages');

let AddHomePackages = (request) => {
    let data = {
        Package_Title : request.payload.Package_Title,
        Package_Subtitle : request.payload.Package_Subtitle,
        Price : request.payload.Price,
        Package_Description : request.payload.Package_Description,
    }

    const promise = new Promise((resolve,reject)=> {
        HomePackages.HomePackagesModel.create(data, (err,data)=> {
            if(err) {
                reject(err);

            } else {
                let response_object = {
                    status_code : 201,
                    message: "Created ",
                    result : "Home Packages Created Successfully"
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



let ShowHomePackages = () => {
    const promise = new Promise((resolve, reject)=>{
        HomePackages.HomePackagesModel.find({},(err,data)=> {
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



let UpdateHomePackages = (request) => {
    const promise = new Promise((resolve, reject) =>{
        HomePackages.HomePackagesModel.findByIdAndUpdate(request.params.id, request.payload,{new:true} ,(err,data) =>{
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


let DeleteHomePackages = (request) => {
    const promise = new Promise((resolve, reject) =>{
        HomePackages.HomePackagesModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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





module.exports.HomePackages = {
    AddHomePackages,
    ShowHomePackages,
    UpdateHomePackages,
    DeleteHomePackages,
}