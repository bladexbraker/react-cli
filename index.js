#!/usr/bin/env node
"use strict";
const { argv } = require('yargs');
const { cru, options } = require('./src');
const args = argv._;
const firstArg = args[0];
const action = cru[firstArg];
if (action instanceof Function) {
    args.shift();
    action(args);
} 
options.go( argv);
