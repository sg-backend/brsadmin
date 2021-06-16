'use strict';

const Hapi = require("@hapi/hapi");
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision')
const HapiAuthJwt2 = require('hapi-auth-jwt2');
const jwt = require('jsonwebtoken');
const HapiSwagger = require('hapi-swagger');

const {common_array} = require('../src/Route/common');

// const checkSession = decoded => {
//     let timestamp = new Date().getTime(),
//         diff = timestamp - decoded['lastlogin'],
//         max_diff = 15*60*1000,
//         is_valid = diff > max_diff;

//     console.log("Decoded the token",decoded);
//     console.log("Current timestamp",timestamp );
//     console.log("Difference in milliseconds ",(timestamp - decoded['lastlogin']));
//     console.log('diff > max_diff: ', !is_valid);
//     return {isValid: !is_valid};
// };

const node = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 5001,
        routes: {
            cors: true
        }   
    })


    await server.register(Inert);
    await server.register(Vision);
    await server.register(HapiAuthJwt2);
    await server.register(HapiSwagger);
    


    
    
    

    // server.auth.strategy('jwt', 'jwt', {
    //     key: '!*(*SECRET*@*@',
    //     validate: checkSession,
    //     verifyOptions: {algorithms: ['HS256']}
    // });


    //server.auth.default('jwt')




    for (const route in common_array) {
        server.route(common_array[route])
    }
   
    
    await server.start();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return server;
}


module.exports = node;