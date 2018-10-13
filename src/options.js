"use strict";
const { AUTHOR, DESCRIPTION, NAME,HELP } = require('./shared/strings');
module.exports = {
    general: {
        v: {
            alias: 'version'
        },
        h: {
            alias: 'help'
        }
    },
    createOptions: {
        r: {
            alias: 'redux',
            type: 'boolean'
        }
    },
    generate: {
        
    }
}