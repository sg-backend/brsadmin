'use strict';
const Promise = require('es6-promise');
const {AboutDifferent} = require('../Model/AddAboutDifferent');
const Fs = require('fs')

let AddAboutDifferent = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('/brsadmin/src/image/' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            AboutDifferent.AboutDifferentModel.find({
                Image: request.payload.Image,
                Title: request.payload.Title,
                Description: request.payload.Description,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    AboutDifferent.AboutDifferentModel.create(
                        {
                            Image : '' + filename,
                            Title: request.payload.Title,
                            Description: request.payload.Description,
                        
                        },
                        (err,data) => {
                            if(err) {
                                reject(err);
                            } else {
                                let response_object = {
                                    statusCode : 201,
                                    message :"About Different Created Successfully",
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



let ShowAboutDifferent = () => {
    const promise = new Promise((resolve, reject)=>{
        AboutDifferent.AboutDifferentModel.find({},(err,data)=> {
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




let UpdateAboutDifferent = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Title: request.payload.Title,
            Description: request.payload.Description,       
        }
        AboutDifferent.AboutDifferentModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated About Different Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteAboutDifferent = (request) => {
    const promise = new Promise((resolve, reject) =>{
        AboutDifferent.AboutDifferentModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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



module.exports.AboutDifferent = {
    AddAboutDifferent,
    ShowAboutDifferent,
    UpdateAboutDifferent,
    DeleteAboutDifferent,
}