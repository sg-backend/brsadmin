'use strict'

const { ContactUs } = require('../Factory/AddContactUs');


let AddContactUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = ContactUs.AddContactUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowContactUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = ContactUs.ShowContactUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let DeleteContactUs = () =>{
    return{
        
        handler: (request, h) => {
       let response = ContactUs.DeleteContactUs(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.ContactUs = {
    AddContactUs,
    ShowContactUs,
    DeleteContactUs
    
}