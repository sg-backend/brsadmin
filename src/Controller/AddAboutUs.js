'use strict'

const { AboutUs } = require('../Factory/AddAboutUs');


let AddAboutUs = () =>{
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
       let response = AboutUs.AddAboutUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowAboutUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutUs.ShowAboutUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateAboutUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutUs.UpdateAboutUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteAboutUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutUs.DeleteAboutUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.AboutUs = {
    AddAboutUs,
    ShowAboutUs,
    UpdateAboutUs,
    DeleteAboutUs
    
}