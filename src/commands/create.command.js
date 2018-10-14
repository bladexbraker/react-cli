"use strict";
const { create } = require('../modules');
const { functions: { log }, strings: { INFO, ERROR } } = require('../shared');

exports.command = [ 'create <where> <name> [redux]', 'cre', 'c' ]; 
exports.des = 'create new project <where> and with what <name> and if with redux';
exports.builder = yargs => {
    yargs.positional('where', {
        describe: 'Where to create',
        type: 'string'
    });
    yargs.positional('name', {
        describe: "Project's name",
        type: 'string'
    })
}; 
exports.handler = ({ where, name, redux }) => {
    log( INFO, `Staring to create new react ${ redux ? 'redux ': '' }project: ${ name }` );
    try {
        create( where, name, redux );
        log( INFO, `Finished creating react ${ redux ? 'redux ': '' }project: ${ name }` );
    } catch ({message}) {
        log( ERROR, message );
    }
};