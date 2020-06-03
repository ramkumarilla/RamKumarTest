'use strict';
let local = require('../local.env.js');
// Test specific configuration
// =================================
module.exports = {
    // Server IP
    ip: '0.0.0.0',

    // Control debug level for modules using visionmedia/debug
    DEBUG: '',

    // Server port
    port: 8080,

    // MongoDB connection options
    mongo: {
        uri: 'mongodb+srv://testuser:testuser1@cluster0-qeyz0.mongodb.net/test1?retryWrites=true&w=majority'
    },
    
    selfURL: 'http://localhost',
    webApp: {
        url: "http://loaclhost:80"
    }
};