"use strict";
const { create } = require('../modules');
const colors = require('../shared/colors');

exports.command = [ 'create <name> [r]', 'c', 'cre' ]; 
exports.des = 'create new project';
exports.builder = yargs => yargs.positional('name', {
    describe: "Project's name",
    type: 'string'
}); 
exports.handler = ({ name, r }) => {
    console.info(colors.magenta(`Staring to create new react ${ r ? 'redux ': '' }project: ${ name }` ));
    const wasCreated = create(name, r );        
    if (wasCreated) {
        console.info(colors.magenta(`\nCreated react ${ r ? 'redux ': '' }project: ${ name }` ));
    }else {
        console.error(colors.red(`\nFailed to create ${ r ? 'redux ': '' }project: ${ name }` ));
    }
};