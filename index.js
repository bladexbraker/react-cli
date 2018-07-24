#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
const chalk = require('chalk');
const { TYPE_CHOICES, getTypeName } = require('./src/constants');
const { createModule, generateModule } = require('./src/modules');
const { options, commands, descriptions, builders, handlers } = require('./src');
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
            console.info(chalk.default.green(`Staring to create new react ${ r ? 'redux ': '' }project: ${ name }` ));
            createModule(name, r );        
        }
    )
    //Generate Command
    .command(
        [ 'generate <type> <name>', 'g', 'gen' ], 
        'generate new file', 
        yargs => {
            yargs.positional('type', {
                choices: TYPE_CHOICES,
                describe: 'What to generate',
                type: 'string',
            });
            yargs.positional('name', {
                describe: 'file name',
                type: 'string'
            });
        }, 
        ({ name, type }) => {
            console.info(chalk.default.green(`Starting to generate new ${ getTypeName( type ) }: ${ name }`));
            createModule(name, r );        
        }
    )
    .exitProcess()
    .argv