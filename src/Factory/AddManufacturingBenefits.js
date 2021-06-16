'use strict';
const Promise = require('es6-promise');
const {ManufacturingBenefits} = require('../Model/AddManufacturingBenefits');
const Fs = require('fs')

let AddManufacturingBenefits = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('/brsadmin/src/image' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            ManufacturingBenefits.ManufacturingBenefitsModel.find({
                Image: request.payload.Image,
                Title: request.payload.Title,
                Subtitle: request.payload.Subtitle,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    ManufacturingBenefits.ManufacturingBenefitsModel.create(
                        {
                            Image : '' + filename,
                            Title: request.payload.Title,
                            Subtitle: request.payload.Subtitle,
                        
                        },
                        (err,data) => {
                            if(err) {
                                reject(err);
                            } else {
                                let response_object = {
                                    statusCode : 201,
                                    message :" Solution Manufacturing Benefits Created Successfully",
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



let ShowManufacturingBenefits = () => {
    const promise = new Promise((resolve, reject)=>{
        ManufacturingBenefits.ManufacturingBenefitsModel.find({},(err,data)=> {
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




let UpdateManufacturingBenefits = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Title: request.payload.Title,
            Subtitle: request.payload.Subtitle,       
        }
        ManufacturingBenefits.ManufacturingBenefitsModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated Manufacturing Benefits Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteManufacturingBenefits = (request) => {
    const promise = new Promise((resolve, reject) =>{
        ManufacturingBenefits.ManufacturingBenefitsModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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



module.exports. ManufacturingBenefits = {
    AddManufacturingBenefits,
    ShowManufacturingBenefits,
    UpdateManufacturingBenefits,
    DeleteManufacturingBenefits,
}