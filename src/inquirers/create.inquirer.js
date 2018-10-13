"use strict";
const inquirer = require( 'inquirer' );
const { create } = require( '../modules' );
const { YES_NO_CHOICES } = require( '../shared/arrays' );
class GenerationInquirer {
    constructor(inquirer) {
        this.inquirer = inquirer;
    }
    init() {
        this.shouldName();
    }
    shouldName() {
        this.inquirer.prompt({
            name: 'shouldName',
            message: 'Would you like to name the project?',
            type: 'list',
            choices: YES_NO_CHOICES
        }).then( answer => {
            if (answer.shouldName) {
                this.chooseName();                
            }else {
                this.chooseLocation();
            }
        })                
    }
    chooseName() {
        this.inquirer.prompt({
            name: 'name',
            message: 'What should it be named?',
            type: 'input',
            default: 'Dummy'
        }).then( answer => {
            this.name = answer.name;
            this.chooseLocation(); 
        })
    }
    chooseLocation() {
        this.inquirer.prompt({
            name: 'location',
            message: 'Where would you like to create the new project?',
            type: 'input',
            default: './'
        }).then( answer => {
            this.location = answer.location;
            this.withRedux();
        })                
    }
    withRedux() {
        this.inquirer.prompt({
            name: 'withRedux',
            message: 'Create with redux?',
            type: 'list',
            choices: YES_NO_CHOICES
        }).then( answer => {
            this.withRedux = answer.withRedux;
            this.shouldInstall();
        })                
    }
    shouldInstall() {
        this.inquirer.prompt({
            name: 'shouldInstall',
            message: 'Should we install packages?',
            type: 'list',
            choices: YES_NO_CHOICES
        }).then( answer => {
            create(answer.name, this.withRedux);
            if (answer.shouldInstall) {     
            }
        })
        
    }
}; 
module.exports = new GenerationInquirer(inquirer);