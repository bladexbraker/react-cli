"use strict";
const inquirer = require( 'inquirer' );
const { START_INQUIRER_CHOICES } = require( '../shared/arrays' );
const { yellow } = require( '../shared/colors' );
const GenerationInquirer = require( './generate.inquirer' );
class StartInquirer {
    constructor(inquirer) {
        this.inquirer = inquirer;
        this.command = 'g';
    }
    init() {
        inquirer.prompt([{
        name: 'start',
        type: 'list',
        message: `What would you like to do?`,
        choices: START_INQUIRER_CHOICES
      }])
      .then(answers => {
        if (answers.start === 'cancel') {
            return;
        }
        if (answers.start === 'c') {
            console.log(yellow( 'Next time just do:\nreact-cli-ca create/c'));
            return;
        }
        if (answers.start === 'g') {
            console.log(yellow( 'Next time just do:\nreact-cli-ca generate/g'));
            GenerationInquirer.init();
            return;
        }
      });
    
    }
};

module.exports = new StartInquirer(inquirer);