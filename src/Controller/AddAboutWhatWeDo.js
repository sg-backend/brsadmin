'use strict'

const { AboutWhatWeDo } = require('../Factory/AddAboutWhatWeDo');


let AddAboutWhatWeDo = () =>{
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
       let response = AboutWhatWeDo.AddAboutWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowAboutWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutWhatWeDo.ShowAboutWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateAboutWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutWhatWeDo.UpdateAboutWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteAboutWhatWeDo = () =>{
    return{
        
        handler: (request, h) => {
       let response = AboutWhatWeDo.DeleteAboutWhatWeDo(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.AboutWhatWeDo = {
    AddAboutWhatWeDo,
    ShowAboutWhatWeDo,
    UpdateAboutWhatWeDo,
    DeleteAboutWhatWeDo
    
}