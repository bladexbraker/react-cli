#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
const { avalableOptions, avalableCommands } = require('./src');
const { CREATE, DELETE, UPDATE } = avalableCommands;
const { commands, description, builder, handler, options, demandCommand: { minAmount, message } } = CREATE;
yargs.options(avalableOptions)
// yargs.options({
//     r: {
        
//     }
// })
yargs.command(commands, description, builder , handler).options(options).demandCommand(minAmount, message).help().exitProcess().argv

/**
 * cli progress
 */
// create a new progress bar instance and use shades_classic theme
// const main = new _cliProgress.Bar({ 
//     format: _colors.green(' {bar}') + ' {percentage}% | ETA: {eta}s | {value}/{total}',
    
// }, _cliProgress.Presets.shades_classic);
