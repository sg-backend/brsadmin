'use strict'

const { AboutBanner } = require('../Factory/AddAboutBanner');


let AddAboutBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutBanner.AddAboutBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowAboutBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutBanner.ShowAboutBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateAboutBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutBanner.UpdateAboutBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteAboutBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutBanner.DeleteAboutBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.AboutBanner = {
    AddAboutBanner,
    ShowAboutBanner,
    UpdateAboutBanner,
    DeleteAboutBanner
    
}