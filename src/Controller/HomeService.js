'use strict'

const { HomeService } = require('../Factory/HomeService');


let AddHomeService = () =>{
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
       let response = HomeService.AddHomeService(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowHomeService = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeService.ShowHomeService(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateHomeService = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeService.UpdateHomeService(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteHomeService = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeService.DeleteHomeService(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.HomeService = {
    AddHomeService,
    ShowHomeService,
    UpdateHomeService,
    DeleteHomeService
    
}