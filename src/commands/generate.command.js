"use strict";
const { generate } = require('../modules');
const { TYPE_CHOICES } = require('../shared/arrays');
const { functions: { getTypeName, firstLetterToUpper, log }, strings: { INFO, ERROR } } = require('../shared');

exports.command = [ 'generate <type> <where> <name>', 'g', 'gen' ]; 
exports.des = 'generate new <type> <where> u tell it to with the <name> you give( first letter of name with be changed to upper case ) '; 
exports.builder = yargs => {
    yargs.positional('type', {
        choices: TYPE_CHOICES,
        describe: 'What to generate',
        type: 'string'
    });
    yargs.positional('where', {
        describe: 'Where to generate',
        type: 'string'
    });
    yargs.positional('name', {
        describe: 'Name of generated',
        type: 'string'
    });
    };
exports.handler = ({ type, where, name }) => {
    type = getTypeName( type);
    name = firstLetterToUpper( name )
    log( INFO, `Starting to generate new ${ type }: ${ name }` );
    try {
        generate( type, where, name );        
        log( INFO, `Finished generating new ${ type }: ${ name }`);
    } catch ({message}) {
        log( ERROR, message );
    }
};