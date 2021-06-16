'use strict';
const Promise = require('es6-promise');
const {SolutionWhatWeDo} = require('../Model/AddSolutionWhatWeDo');
const Fs = require('fs')

let AddSolutionWhatWeDo = (request) => {
    console.log("File",request.payload['file'].hapi.filename)
  

  const promise = new Promise((resolve, reject)=> {


    const filename = request.payload.file.hapi.filename;

    Fs.writeFile('./brsadmin/src/image' + '/' + filename, request.payload.file._data,(err,data)=>{
        if(err) {
            reject(err);
            console.log("Error",err);
        } else {
            SolutionWhatWeDo.SolutionWhatWeDoModel.find({
                Icon: request.payload.Icon,
                Title: request.payload.Title,
                Description: request.payload.Description,
            
            },(err,data) => {
                if(err) {
                    reject(err);
                } else {
                    SolutionWhatWeDo.SolutionWhatWeDoModel.create(
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
                                    message :" Solution What We Do Created Successfully",
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



let ShowSolutionWhatWeDo = () => {
    const promise = new Promise((resolve, reject)=>{
        SolutionWhatWeDo.SolutionWhatWeDoModel.find({},(err,data)=> {
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




let UpdateSolutionWhatWeDo = (request) => {
    const promise = new Promise((resolve,reject) => {

        let update_data = {
            Title: request.payload.Title,
            Description: request.payload.Description,        
        }
        SolutionWhatWeDo.SolutionWhatWeDoModel.updateOne({"_id" : request.params.id},{$set : update_data},(err,data) => {
            if(err) {
                reject(err);
            } else {
                let response_object = {
                    statuscode :200,
                    message:"Updated Solution What We Do Successfully ",
                };
                resolve(response_object);
            }
        })       
    });
    return promise;
}


let DeleteSolutionWhatWeDo = (request) => {
    const promise = new Promise((resolve, reject) =>{
        SolutionWhatWeDo.SolutionWhatWeDoModel.findByIdAndDelete(request.params.id ,(err,data) =>{
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











module.exports.SolutionWhatWeDo = {
    AddSolutionWhatWeDo,
    ShowSolutionWhatWeDo,
    UpdateSolutionWhatWeDo,
    DeleteSolutionWhatWeDo,
}