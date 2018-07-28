"use strict";
const inquirer = require( 'inquirer' );
module.exports = {
    TYPE_CHOICES: [
        'component', 
        'comp',
        'c',
        'container', 
        'cont',
        'ct',
        'reducer', 
        'red',
        'r',
        'action',
        'act',
        'a',
        'actionType',
        'acte',
        'at',
        'module',
        'mod',
        'm',
        'route', 
        'rot',
        'r'
    ],
    SHORT_TYPE_CHOICES: [
        'component', 
        'container', 
        'reducer', 
        'action',
        'actionType',
        'module',
        'route', 
    ],
    START_INQUIRER_CHOICES : [
        new inquirer.Separator('Options:'),
        { 
            name: 'Create a project',
            value: 'c',
            type: 'list'
    
        },
        { 
            name: 'Run a generator',
            value:'g'
        },
        new inquirer.Separator(),
        { 
            name: 'Cancel!',
            value:'cancel'
        },
    ]
}