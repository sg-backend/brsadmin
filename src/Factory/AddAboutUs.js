'use strict';
const Promise = require('es6-promise');
const {AboutUs} = require('../Model/AddAboutUs');
const Fs = require('fs')

let AddAboutUs = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('/brsinfotechadminapi/src/image' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            AboutUs.AboutUsModel.find({
                Image: request.payload.Image,
                Title: request.payload.Title,
                Description: request.payload.Description,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    AboutUs.AboutUsModel.create(
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
                                    message :"About Us Created Successfully",
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



let ShowAboutUs = () => {
    const promise = new Promise((resolve, reject)=>{
        AboutUs.AboutUsModel.find({},(err,data)=> {
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




let UpdateAboutUs = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Title: request.payload.Title,
            Description: request.payload.Description,       
        }
        AboutUs.AboutUsModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated About Us Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteAboutUs = (request) => {
    const promise = new Promise((resolve, reject) =>{
        AboutUs.AboutUsModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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



module.exports.AboutUs = {
    AddAboutUs,
    ShowAboutUs,
    UpdateAboutUs,
    DeleteAboutUs,
}