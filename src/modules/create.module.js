"use strict";
const fs = require('fs');
const chalk = require('chalk');
const textFiles = require('../textFiles');
const { generateLayout } = require('../layouts');

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
        console.info(`\n${ chalk.default.black.greenBright('[ created ]') } ${ layout.path.replace('/', '') } folder`);
        for (const key in layout) {
            const pathOrNestedDir = layout[ key ];
            if ( typeof pathOrNestedDir === 'string' ) {
                if ( key !== 'path' ) {
                    const to = currentPath+pathOrNestedDir;
                    const from = textFiles[ key ];
                    writeToFile( to, from );    
                    console.info(`\n${ chalk.default.black.greenBright('[ created ]') } ${ pathOrNestedDir.replace('/', '') } file`);
                }
            }else {
                createDirAndFiles( pathOrNestedDir, currentPath);
            }
        }
        return 200;
    }
    function create( projectName ){
        textFiles.packageJson = textFiles.packageJson.toString().replace('dummy', projectName );
        const { progress, layout} = generateLayout( projectName );
        createDirAndFiles( layout );
    }
    return create
})();

