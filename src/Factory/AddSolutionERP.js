'use strict';
const Promise = require('es6-promise');
const {SolutionERP} = require('../Model/AddSolutionERP');
const Fs = require('fs')

let AddSolutionErp = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('/brsinfotechadminapi/src/image/' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            SolutionERP.SolutionERPModel.find({
                Icon: request.payload.Icon,
                Title: request.payload.Title,
                Description: request.payload.Description,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    SolutionERP.SolutionERPModel.create(
                        {
                            Icon : '' + filename,
                            Title: request.payload.Title,
                            Description: request.payload.Description,
                        
                        },
                        (err,data) => {
                            if(err) {
                                reject(err);
                            } else {
                                let response_object = {
                                    statusCode : 201,
                                    message :" Solution ERP Created Successfully",
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



let ShowSolutionErp = () => {
    const promise = new Promise((resolve, reject)=>{
        SolutionERP.SolutionERPModel.find({},(err,data)=> {
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




let UpdateSolutionErp = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Title: request.payload.Title,
            Description: request.payload.Description,        
        }
        SolutionERP.SolutionERPModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated Solution ERP Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteSolutionErp = (request) => {
    const promise = new Promise((resolve, reject) =>{
        SolutionERP.SolutionERPModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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



module.exports.SolutionERP = {
    AddSolutionErp,
    ShowSolutionErp,
    UpdateSolutionErp,
    DeleteSolutionErp,
}