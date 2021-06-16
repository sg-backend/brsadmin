'use strict'

const { SolutionWhatWeDo } = require('../Factory/AddSolutionWhatWeDo');


let AddSolutionWhatWeDo = () =>{
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
       let response = SolutionWhatWeDo.AddSolutionWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowSolutionWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionWhatWeDo.ShowSolutionWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateSolutionWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionWhatWeDo.UpdateSolutionWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteSolutionWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = SolutionWhatWeDo.DeleteSolutionWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.SolutionWhatWeDo = {
    AddSolutionWhatWeDo,
    ShowSolutionWhatWeDo,
    UpdateSolutionWhatWeDo,
    DeleteSolutionWhatWeDo
    
}