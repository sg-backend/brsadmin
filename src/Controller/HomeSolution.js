'use strict'

const { HomeSolution } = require('../Factory/HomeSolution');


let AddHomeSolution = () =>{
    return{
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data',
            maxBytes: 1024 * 1024 * 100,
            timeout: false,
            multipart : true
            },
        
        handler: (request, h) => {
       let response = HomeSolution.AddHomeSolution(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowHomeSolution = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeSolution.ShowHomeSolution(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateHomeSolution = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeSolution.UpdateHomeSolution(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteHomeSolution = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeSolution.DeleteHomeSolution(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.HomeSolution = {
    AddHomeSolution,
    ShowHomeSolution,
    UpdateHomeSolution,
    DeleteHomeSolution
    
}