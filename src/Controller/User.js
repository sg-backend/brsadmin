'use strict';
const { User } = require('../Factory/User');

// const {UserValidation} = require('../Validation/user')

const Joi = require('joi')


let register = () => {
    return {
       
    //     description: 'Sigup',
    // tags: ['api',"User"],
    //     plugins: {
    //             'hapi-swagger': {
    //                 payloadType: 'form'
    //             }
    //     },
    //     validate : {
    //         payload: Joi.object().keys({
    //             email: Joi.string().required(),
    //             mobile: Joi.string().required(),
    //             password:Joi.string().required().required(),
             
              
    //         })
    //     },
        handler: (request, h) => {
            let response = User.userSignUp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}



let registerSignin = () => {
    return {
        handler : (request , h) => {
            let response = User.userLogin(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })

        }
    }
}

module.exports.User = {
    register,
    registerSignin
}