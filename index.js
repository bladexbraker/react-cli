#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
const { 
    options: { general, createOptions }, 
    commands: {
        defaultCommand,
        create,
        generate
    }
} = require('./src');
yargs
    .options(general)
    .scriptName('react-cli-ca')
    .argv
yargs    
    .demandCommand(1, 'You need at least one command before moving on')
    //Usage Command
    .command(defaultCommand)
    //Create Command
    .command(create)
        .options( createOptions )
    //Generate Command
    .command(generate)
    .exitProcess()
    .argv;
