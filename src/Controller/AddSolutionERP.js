'use strict'

const { SolutionERP } = require('../Factory/AddSolutionERP');


let AddSolutionErp = () =>{
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
       let response = SolutionERP.AddSolutionErp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowSolutionErp = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionERP.ShowSolutionErp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateSolutionErp = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionERP.UpdateSolutionErp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteSolutionErp = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionERP.DeleteSolutionErp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.SolutionERP = {
    AddSolutionErp,
    ShowSolutionErp,
    UpdateSolutionErp,
    DeleteSolutionErp
    
}