"use strict";
const { generate } = require('../modules');
const colors = require('../shared/colors');
const { TYPE_CHOICES } = require('../shared/arrays');
const { getTypeName, firstLetterToUpper } = require('../shared/functions');

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
    console.info(colors.magenta(`Starting to generate new ${ type }: ${ name }`));
    const wasGenerated = generate( type, where, name );        
    if (wasGenerated) {
        console.info(colors.magenta(`\nGenerated new ${ type }: ${ name }`));
    }else {
        console.info(colors.red(`\nFailed to generate new ${ type }: ${ name }`));
    }
};