"use strict";
const fs = require('fs');
const { YES_NO_CHOICES, SHORT_TYPE_CHOICES, START_INQUIRER_CHOICES } = require('./arrays')
const { INVALID_INPUT_MESSAGE } = require('./functions')
module.exports = {
    startQuestions: [{
        name: 'start',
        type: 'list',
        message: `What would you like to do?`,
        choices: START_INQUIRER_CHOICES
    }, {
        name: 'type',
        message: 'What to generate?',
        type: 'list',
        choices: SHORT_TYPE_CHOICES,
        when: ({ start }) => start === 'g'
    }, {
        name: 'withRedux',
        message: 'Create with redux?',
        type: 'list',
        choices: YES_NO_CHOICES,
        when: ({ start }) => start === 'c'
    }, {
        name: 'location',
        message: 'Where should it go?',
        type: 'input',
        default: ({ type }) => type ? `./src/${ type }s`: './',
        validate: input => /^[\.\/a-zA-z-_]+$/.test( input ) || INVALID_INPUT_MESSAGE( input ), 
        when: ({ start }) => start !== 'cancel'
    }, {
        name: 'name',
        message: 'What should it be named?',
        type: 'input',
        default: ({ type }) => type ? 'Dummy': 'dummy',
        validate: (input, { type }) => {
            if ( type ) {
                return /^[a-zA-Z]+$/.test( input ) || 'Name can only contain letters';
            }
            return /^[a-z-_]+$/.test( input ) || 'Name can only contain a-z, - and _'; 
        },
        when: ({ start }) => start !== 'cancel',
    }]
}
/* function to add in the future
{
    name: 'shouldInstall',
    message: 'Should we install packages?',
    type: 'list',
    choices: YES_NO_CHOICES,
    when: ({ start }) => start === 'c'
}
*/