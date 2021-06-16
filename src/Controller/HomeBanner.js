'use strict'

const { Banner } = require('../Factory/HomeBanner');


let AddHomeBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = Banner.AddHomeBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowHomeBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = Banner.ShowHomeBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateHomeBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = Banner.UpdateHomeBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteHomeBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = Banner.DeleteHomeBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.Banner = {
    AddHomeBanner,
    ShowHomeBanner,
    UpdateHomeBanner,
    DeleteHomeBanner
    
}