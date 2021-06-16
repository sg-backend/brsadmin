'use strict';
const Promise = require('es6-promise');
const {HomeSolution} = require('../Model/HomeSolution');
const Fs = require('fs')

let AddHomeSolution = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('./brsinfotechadminapi/src/image' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            HomeSolution.HomeSolutionModel.find({
                Icon_Image: request.payload.Icon_Image,
                Icon_Name: request.payload.Icon_Name,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    HomeSolution.HomeSolutionModel.create(
                        {
                            Icon_Image : '' + filename,
                            Icon_Name: request.payload.Icon_Name,
                        
                        },
                        (err,data) => {
                            if(err) {
                                reject(err);
                            } else {
                                let response_object = {
                                    statusCode : 201,
                                    message :"Home Solution Created Successfully",
                                    result : data
                                }
                                // let response_object = (
                                //     '<script>window.alert("Employee Created successfully");window.location="http://localhost:3000/#/employee/all-employees";</script>'
                                //   );
                               
                                resolve(response_object);
                            }
                        }
                    )
                }
            })
        }
    });
    
  })
return promise;
    
}



let ShowHomeSolution = () => {
    const promise = new Promise((resolve, reject)=>{
        HomeSolution.HomeSolutionModel.find({},(err,data)=> {
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




let UpdateHomeSolution = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Icon_Name: request.payload.Icon_Name,          
        }
        HomeSolution.HomeSolutionModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated Home Solution Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteHomeSolution = (request) => {
    const promise = new Promise((resolve, reject) =>{
        HomeSolution.HomeSolutionModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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











module.exports.HomeSolution = {
    AddHomeSolution,
    ShowHomeSolution,
    UpdateHomeSolution,
    DeleteHomeSolution,
}