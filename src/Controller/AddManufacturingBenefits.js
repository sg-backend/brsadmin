'use strict'

const { ManufacturingBenefits } = require('../Factory/AddManufacturingBenefits');


let AddManufacturingBenefits = () =>{
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
       let response = ManufacturingBenefits.AddManufacturingBenefits(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let ShowManufacturingBenefits = () =>{
    return{
        
        handler: (request, h) => {
       let response = ManufacturingBenefits.ShowManufacturingBenefits(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let UpdateManufacturingBenefits = () =>{
    return{
        
        handler: (request, h) => {
       let response = ManufacturingBenefits.UpdateManufacturingBenefits(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


let DeleteManufacturingBenefits = () =>{
    return{
        
        handler: (request, h) => {
       let response = ManufacturingBenefits.DeleteManufacturingBenefits(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}


module.exports.ManufacturingBenefits = {
    AddManufacturingBenefits,
    ShowManufacturingBenefits,
    UpdateManufacturingBenefits,
    DeleteManufacturingBenefits
    
}