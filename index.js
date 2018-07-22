#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
const { avalableOptions, avalableCommands } = require('./src');
const { CREATE, DELETE, UPDATE } = avalableCommands;
yargs.options(avalableOptions)
yargs.command(CREATE.commands, CREATE.description, CREATE.builder , CREATE.handler).exitProcess().argv
console.log('test');
/**
 * cli progress
 */
// create a new progress bar instance and use shades_classic theme
// const main = new _cliProgress.Bar({ 
//     format: _colors.green(' {bar}') + ' {percentage}% | ETA: {eta}s | {value}/{total}',
    
// }, _cliProgress.Presets.shades_classic);
