'use strict'

const { HomeBenefit } = require('../Factory/AddHomeBenefit');


let AddHomeBenefit = () =>{
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
       let response = HomeBenefit.AddHomeBenefit(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowHomeBenefit = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeBenefit.ShowHomeBenefit(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let updateHomeBenefit = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeBenefit.updateHomeBenefit(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteHomeBenefit = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomeBenefit.DeleteHomeBenefit(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.HomeBenefit = {
    AddHomeBenefit,
    ShowHomeBenefit,
    updateHomeBenefit,
    DeleteHomeBenefit
    
}