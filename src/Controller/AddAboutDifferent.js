'use strict'

const { AboutDifferent } = require('../Factory/AddAboutDifferent');


let AddAboutDifferent = () =>{
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
       let response = AboutDifferent.AddAboutDifferent(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowAboutDifferent = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutDifferent.ShowAboutDifferent(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateAboutDifferent = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutDifferent.UpdateAboutDifferent(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteAboutDifferent = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutDifferent.DeleteAboutDifferent(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.AboutDifferent = {
    AddAboutDifferent,
    ShowAboutDifferent,
    UpdateAboutDifferent,
    DeleteAboutDifferent
    
}