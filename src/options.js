"use strict";
const { AUTHOR, DESCRIPTION, NAME,HELP } = require('./constants');
module.exports = {
    v: {
        alias: 'version'
    },
    r: {
        alias: 'redux',
        description: 'Using react redux',
        type: 'boolean'
    }
}