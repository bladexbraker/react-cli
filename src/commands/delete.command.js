'use strict';
const chalk = require('chalk');
const createModule = require( '../modules/create.module' );

module.exports = ( function() {
    const CREATE = {
        commands: [ 'create [name]', 'c [name]' ],
        description: 'create new project',
        builder: yargs => yargs.positional('name', {
            describe: 'new projects name',
            type: 'string'
        }),
        handler:  ({ name }) => {
            if (name) {
                console.info(chalk.default.green('creating new project ' + name));
                createModule(name);        
            }
        }        
    };
    return CREATE;
})( );