"use strict";
const inquirer = require( 'inquirer' );
const { inquirers: { startQuestions }, arrays: { GET_NAMES_BY_TYPE }, functions: { firstLetterToUpper, log }, strings: { INFO, SHORTCUT, ERROR } } = require( '../shared' );

const { create, generate } = require( '../modules' );
class StartInquirer {
    constructor(inquirer) {
        this.inquirer = inquirer;
        this.switchBoard = this.switchBoard.bind( this );
    }
    init() {
        this.inquirer.prompt( startQuestions )
            .then( this.switchBoard )
            .catch( ({ message }) => {
                log( ERROR,  message );
            })
    
    }
    switchBoard(answers) {
        const { start, location, name, withRedux, type, shouldInstall } = answers || {};
        if ( !answers || !start || !location || !name ) {
            throw new Error('StartInquirer switchBoard was used incorrectly.Contact Customer Support!');
        }
        switch( start ) {
            case 'c': {
                log( INFO, `Staring to create new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
                const result = create(location, name, withRedux, shouldInstall);
                log( INFO, `Finished creating new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
                log( SHORTCUT, `create/cre/c <where> <name>${ withRedux ? ' -r': ''  }` );
                return result;
            }
            case 'g': {
                const nameToUpper = firstLetterToUpper( name );
                log( INFO, `Starting to generate new ${ type }: ${ nameToUpper }` );
                const result = generate(type, location, nameToUpper);
                log( INFO, `Finished generating new ${ type }: ${ nameToUpper }` );
                log( SHORTCUT, `generate ${ GET_NAMES_BY_TYPE[ type ].join('/') } <where> <name>` );
                return result;
            }
        }

    }
};

module.exports = new StartInquirer(inquirer);