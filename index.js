#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
const { 
    options, 
    modules: { create, generate },
    shared: {
        arrays: { TYPE_CHOICES }, 
        functions: { getTypeName, firstLetterToUpper }, 
        colors
    }
} = require('./src');
yargs.options(options);
yargs
    .demandCommand(1, 'You need at least one command before moving on')
    //Create Command
    .command(
        [ 'create <name> [r]', 'c', 'cre' ], 
        'create new project', 
        yargs => yargs.positional('name', {
            describe: "Project's name",
            type: 'string'
        }), 
        ({ name, r }) => {
            console.info(colors.magenta(`Staring to create new react ${ r ? 'redux ': '' }project: ${ name }` ));
            const wasCreated = create(name, r );        
            if (wasCreated) {
                console.info(colors.magenta(`\nCreated react ${ r ? 'redux ': '' }project: ${ name }` ));
            }else {
                console.error(colors.red(`\nFailed to create ${ r ? 'redux ': '' }project: ${ name }` ));
            }
        }
    )
    //Generate Command
    .command(
        [ 'generate <type> <where> <name>', 'g', 'gen' ], 
        'generate new <type> <where> u tell it to with the <name> you give( first letter of name with be changed to upper case ) ', 
        yargs => {
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
        }, 
        ({ type, where, name }) => {
            type = getTypeName( type);
            name = firstLetterToUpper( name )
            console.info(colors.magenta(`Starting to generate new ${ type }: ${ name }`));
            const wasGenerated = generate( type, where, name );        
            if (wasGenerated) {
                console.info(colors.magenta(`\nGenerated new ${ type }: ${ name }`));
            }else {
                console.info(colors.red(`\nFailed to generate new ${ type }: ${ name }`));
            }
        }
    )
    .exitProcess()
    .argv