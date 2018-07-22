"use strict";
const fs = require('fs');
const textFiles = require('./textFiles');
const { generateLayout } = require('./layouts');

module.exports = ( function() {
    function createDir(dir, isThrowAble = false ) {
        const doesExist = fs.existsSync(dir);
        if (doesExist){
            if (isThrowAble){
                throw Error(`${ dir } already exists`);
            }    
            return true;
        }
        fs.mkdirSync(dir); 
        return false;
    }
    function writeToFile( to, from = null ) {
        if ( from ) {
            fs.writeFileSync( to, from );        
        }else {
            fs.writeFileSync( to );
        }
    }
    function createDirAndFiles( layout, prevPath = '' ) {
        const currentPath = prevPath + layout.path;
        createDir( currentPath, true );
        for (const key in layout) {
            const pathOrNestedDir = layout[ key ];
            if ( typeof pathOrNestedDir === 'string' ) {
                if ( key !== 'path' ) {
                    const to = currentPath+pathOrNestedDir;
                    const from = textFiles[ key ];
                    writeToFile( to, from );    
                }
            }else {
                createDirAndFiles( pathOrNestedDir, currentPath);
            }
        }
        return 200;
    }
    function create( args ){
        const reactOrAngular = args.shift();
        const projectName = args.shift();
        if (!projectName) {
            throw Error('Missing Directory Argument')
        }
        textFiles.packageJson = textFiles.packageJson.toString().replace('dummy', projectName );
        let layout = null;
        switch(reactOrAngular) {
            case "r":
            case "redux":
            case "Redux": {
                layout = generateLayout( projectName, true );
                break;
            }       
            default: {
                layout = generateLayout( projectName );
            }
        }
        createDirAndFiles( layout );
    }
    return {
        create,
        c: create
    }
})();

