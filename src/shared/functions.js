"use strict";
const { greenBright, blueBright, bgWhiteBright, yellowBright, redBright } = require('./colors');
const { CREATE, INFO, WARNING, ERROR, SHORTCUT } = require('./strings');
module.exports = {
    INVALID_INPUT_MESSAGE: input => `${ input }: is NOT a valid location`,
    firstLetterToUpper: text => text[0].toUpperCase() + text.substring(1, text.length ),
    replaceDummy: ( stringToReplace, replaceWith ) => stringToReplace.replace( /Dummy/g, replaceWith ),
    getTypeName: type => {
        let name = type;
        switch (type) {
            case 'comp':
            case 'c': {
                name = 'component';
                break;
            }
            case 'cont':
            case 'ct': {
                name = 'container';
                break;
            }
            case 'red':
            case 'r': {
                name = 'reducer';
                break;
            }
            case 'red':
            case 'r': {
                name = 'reducer';
                break;
            }
            case 'act':
            case 'a': {
                name = 'action';
                break;
            }
            case 'acte':
            case 'at': {
                name = 'actionType';
                break;
            }
            case 'mod':
            case 'm': {
                name = 'module';
                break;
            } 
            case 'rot':
            case 'r': {
                name = 'route';
                break;
            }
        }
        return name;
    },
    log: ( type, message ) => {
        switch ( type ) {
            case CREATE: {
                return console.log(`${ greenBright('[ Create ]') } ${ message }`);
            }
            case SHORTCUT: {
                return console.log(`${ blueBright('[ Shortcut ]') } ${ message }`);
            }
            case INFO: {
                return console.info(`${ bgWhiteBright.black('[ Info ]') } ${ message }`);
            }
            case WARNING: {
                return console.warn(`${ yellowBright('[ Warning ]') } ${ message }`);
            }
            case ERROR: {
                return console.error(`${ redBright('[ Error ]') } ${ message }`);
            }
        }
    }
}