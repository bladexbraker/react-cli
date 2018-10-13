"use strict";
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
    }
}