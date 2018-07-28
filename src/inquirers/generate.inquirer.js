"use strict";
const inquirer = require( 'inquirer' );
const { generate } = require( '../modules' );
const { SHORT_TYPE_CHOICES } = require( '../shared/arrays' );
class GenerationInquirer {
    constructor(inquirer) {
        this.inquirer = inquirer;
        this.command = 'react-cli-ca g';
        this.isComlete = false;
    }
    init() {
        this.selectType();
    }
    selectType() {
        this.inquirer.prompt({
            name: 'type',
            message: 'What to generate?',
            type: 'list',
            choices: SHORT_TYPE_CHOICES.map( type => ({ name: type, value: type }))
        }).then( answer => {
            this.type = answer.type;
            this.chooseLocation()
        })                
    }
    chooseLocation() {
        this.inquirer.prompt({
            name: 'location',
            message: 'Where should it go?',
            type: 'input',
            default: './'
        }).then( answer => {
            this.location = answer.location;
            this.chooseName();
        })                
    }
    chooseName() {
        this.inquirer.prompt({
            name: 'name',
            message: 'What should it be nammed?',
            type: 'input',
            default: 'Dummy'
        }).then( answer => {
            generate(this.type, this.location, answer.name );
        })

    }
}; 
module.exports = new GenerationInquirer(inquirer);