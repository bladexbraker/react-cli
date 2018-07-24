"use strict";
const fs = require('fs');
const chalk = require('chalk');
const textFiles = require('../textFiles');
const { generateLayout } = require('../layouts');

module.exports = ( function() {
    function createLog( type, currentPath, prevPath ) {
        currentPath = currentPath.replace('/', '');
        if ( prevPath.length > 0 ) {
            prevPath = ' in ' + prevPath.replace('./', '');
        }
        console.info(`\n${ chalk.default.black.greenBright('[ created ]') } ${ type } ${ currentPath }${ prevPath }`);
    }
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
    function writeToFile( to, from = null, fileName ) {
        if ( from ) {
            if ( to.includes('App') ) {
                from = from.toString().replace(/Dummy/g, fileName.substring(0, fileName.indexOf('.')) );
            }
            fs.writeFileSync( to, from );        
        }else {
            fs.writeFileSync( to );
        }
    }
    function createDirAndFiles( layout, prevPath = '' ) {
        const path = layout.path;
        const currentPath = prevPath + path;
        createDir( currentPath, true );
        createLog('folder', path, prevPath);
        for (const key in layout) {
            const pathOrNestedDir = layout[ key ];
            if ( typeof pathOrNestedDir === 'string' ) {
                if ( key !== 'path' ) {
                    const to = currentPath+pathOrNestedDir;
                    const from = textFiles[ key ];
                    writeToFile( to, from, pathOrNestedDir.replace('/', '') );
                    createLog('file', pathOrNestedDir, currentPath)    
                }
            }else {
                createDirAndFiles( pathOrNestedDir, currentPath);
            }
        }
        return 200;
    }
    function create( projectName, isRedux ){
        textFiles.packageJson = textFiles.packageJson.toString().replace('dummy', projectName );
        const layout = generateLayout( projectName, isRedux );
        createDirAndFiles( layout );
    }
    return create
})();

