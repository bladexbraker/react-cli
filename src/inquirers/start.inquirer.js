"use strict";
const inquirer = require( 'inquirer' );
const { inquirers: { startQuestions }, colors: { blueBright }, arrays: { GET_NAMES_BY_TYPE } } = require( '../shared' );
const { create, generate } = require( '../modules' );
class StartInquirer {
    constructor(inquirer) {
        this.inquirer = inquirer;
    }
    init() {
        this.inquirer.prompt( startQuestions )
            .then( ({ start, location, name, withRedux, type, shouldInstall }) => {
                switch( start ) {
                    case 'c': {
                        console.log(`${blueBright( '[ SHORTCUT ]')} create/cre/c <name>${ withRedux ? ' -r': ''  }` );
                        create(location, name, withRedux, shouldInstall);
                        console.log(`${blueBright( '[ SHORTCUT ]')} create/cre/c <name>${ withRedux ? ' -r': ''  }` );
                        return;
                    }
                    case 'g': {
                        console.log(`${blueBright( '[ SHORTCUT ]')} generate/gen/g <name>${ withRedux ? ' -r': ''  }` );
                        generate(type, location, name);
                        console.log(`${blueBright( '[ SHORTCUT ]')} generate ${ GET_NAMES_BY_TYPE[ type ].join('/') } <where> <name>` );
                        return;
                    }
                }
            });
    
    }
};

module.exports = new StartInquirer(inquirer);