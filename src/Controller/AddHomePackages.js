'use strict'

const { HomePackages } = require('../Factory/AddHomePackages');


let AddHomePackages = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomePackages.AddHomePackages(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowHomePackages = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomePackages.ShowHomePackages(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateHomePackages = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomePackages.UpdateHomePackages(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteHomePackages = () =>{
    return{
        
        handler: (request, h) => {
       let response = HomePackages.DeleteHomePackages(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.HomePackages = {
    AddHomePackages,
    ShowHomePackages,
    UpdateHomePackages,
    DeleteHomePackages

    
}