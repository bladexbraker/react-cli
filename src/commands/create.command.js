"use strict";
const { create } = require('../modules');
const colors = require('../shared/colors');

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
    console.info(colors.magenta(`Staring to create new react ${ redux ? 'redux ': '' }project: ${ name }` ));
    const wasCreated = create( where, name, redux )        
    if (wasCreated) {
        console.info(colors.magenta(`\nCreated react ${ redux ? 'redux ': '' }project: ${ name }` ));
    }else {
        console.error(colors.red(`\nFailed to create ${ redux ? 'redux ': '' }project: ${ name }` ));
    }
};