'use strict'

const { SolutionBanner } = require('../Factory/AddSolutionBanner');


let AddSolutionBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionBanner.AddSolutionBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowSolutionBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionBanner.ShowSolutionBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateSolutionBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionBanner.UpdateSolutionBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteSolutionBanner = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionBanner.DeleteSolutionBanner(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.SolutionBanner = {
    AddSolutionBanner,
    ShowSolutionBanner,
    UpdateSolutionBanner,
    DeleteSolutionBanner
    
}