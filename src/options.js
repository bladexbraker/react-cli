"use strict";
const fs = require('fs');
const { help, internalPackageJson } = require('./textFiles');
const { AUTHOR, DESCRIPTION, NAME,HELP } = require('./constants');
module.exports = (function() {
    const relevantOptions = {
        a: AUTHOR,
        author: AUTHOR,
        d: DESCRIPTION,
        description: DESCRIPTION,
        n: NAME,
        name: NAME,
        h: HELP,
        help: HELP,
    }
    function changePackageJson( directory, fields ) {
        if (!directory || !fs.existsSync(directory) ) {
            throw Error('Given Directory not found!');
        }  
        directory += '/package.json';
        const data = JSON.parse( fs.readFileSync(directory, 'utf8') );
        fields.forEach(({ name, value }) => {
            if ( typeof value !== 'string' || !/^\w+/.test( value ) ) {
                throw Error(`${ name } has to be a string and not emtpy!`)
            }
            data[name] = value; 
        });
        fs.writeFileSync(directory, JSON.stringify( data, null, 2 ) );
    }
    function showHelp() {
        const helpString = help.toString();
        const found = helpString.split('#');
        found.forEach( (string, index) => {
            if ( index > 0 && index < 4  ) {
                const substring = string.split('&'); 
                console.log('\x1b[36m%s\x1b[0m', substring[0], substring[1]);                
            }else {
                console.log(string);
            }
        })
    }
    function showVersion() {
        const { version } = JSON.parse( internalPackageJson );
        console.log('version:', version);
    }
    /**
     * Finds relevant options and does there actions if given an existing directory 
     * @param {string} directory  
     * @param {object} argv 
     */
    function go(argv) {
        if ( argv['h'] ) {
            showHelp();
            return;
        }
        if ( argv['v'] ) {
            showVersion();
            return;
        }
        const fieldsToChange = []; 
        for (const key in argv) {
            const name = relevantOptions[ key ];
            const value = argv[ key ];
            if (name) {
                fieldsToChange.push({ name, value });
            }
        }
        if (fieldsToChange.length > 0) {
            changePackageJson( directory, fieldsToChange );                    
        }
    }
    return {
        go,
    }
})();