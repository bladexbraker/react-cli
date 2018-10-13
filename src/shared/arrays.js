"use strict";
const inquirer = require( 'inquirer' );
module.exports = {
    GET_NAMES_BY_TYPE:{
        component: [
            'component', 
            'comp',
            'c'
        ],
        container: [
            'container', 
            'cont',
            'ct'
        ],
        reducer: [
            'reducer', 
            'red',
            'r'
        ],
        action: [
            'action',
            'act',
            'a'
        ],
        actionType: [
            'actionType',
            'acte',
            'at'
        ],
        module: [
            'module',
            'mod',
            'm'
        ],
        route: [
            'route', 
            'rot',
            'r'
        ]
    },
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
        { 
            name: 'component',
            value: 'component'
        }, { 
            name: 'container',
            value: 'container'
        }, { 
            name: 'reducer',
            value: 'reducer'
        }, { 
            name: 'action',
            value: 'action'
        }, { 
            name: 'actionType',
            value: 'actionType'
        }, { 
            name: 'module',
            value: 'module'
        }, { 
            name: 'route',
            value: 'route'
        },  
    ],
    YES_NO_CHOICES: [
        { 
            name: 'Yes', 
            value: true
        }, { 
            name: 'No', 
            value: false
        }, 
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