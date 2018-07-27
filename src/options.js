"use strict";
const { AUTHOR, DESCRIPTION, NAME,HELP } = require('./shared/strings');
module.exports = {
    v: {
        alias: 'version'
    },
    h: {
        alias: 'help'
    },
    r: {
        alias: 'redux',
        description: 'Using react redux',
        type: 'boolean'
    }
}