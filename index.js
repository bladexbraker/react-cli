#!/usr/bin/env node
"use strict";
const fs = require( 'fs' );
const yargs = require('yargs');
const { 
    options, 
    commands: {
        def,
        create,
        generate
    }
} = require('./src');
yargs
    .options(options)
    .scriptName('react-cli-ca')
    .argv
yargs    
    .demandCommand(1, 'You need at least one command before moving on')
    //Usage Command
    .command(def)
    //Create Command
    .command(create)
    //Generate Command
    .command(generate)
    .exitProcess()
    .argv;
