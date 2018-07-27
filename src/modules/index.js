"use strict";
const fs = require('fs');
const textFiles = require('../textFiles');
const { functions: { firstLetterToUpper, replaceDummy }, colors } = require('../shared');
const { creatorLayouts, generatorLayouts } = require('../layouts');

module.exports = ( function() {
    function createLog( type, dir ) {
        const locations = dir.split('/');
        const currentDir = locations.pop()
        return `\n${ colors.greenBright('[ created ]') } ${ type } ${ currentDir } ${ locations.length > 1 ? ` in ${locations.join('/')}` : '' }`;
    }
    function createDir( dir ) {
        const doesExist = fs.existsSync(dir);
        if (doesExist){
            console.error(`\n${ colors.redBright(`${ dir } folder already exists`) }` ); 
            return true;
        }
        fs.mkdirSync(dir);
        console.info( createLog( 'folder', dir ));       
        return false;
    }
    function writeToFile( to, from = null ) {
        if ( fs.existsSync(to) ) {
            console.error(colors.redBright(`\n${ to } file already exists `));
            return true;        
        }
        if ( from ) {
            fs.writeFileSync( to, from );        
        }else {
            fs.writeFileSync( to, '' );
        }
        console.info(createLog( 'file', to ));
        return false;        
    }
    function createDirAndFiles( layout, prevPath = '', prevObjName = '' ) {
        const keys = Object.keys( layout );
        const path = layout[ keys.shift() ].replace('dummy', 'App');
        const currentPath = prevPath + path;
        if (createDir( currentPath, true )) {
            return false;
        }
        keys.forEach( key => {
            const pathOrNestedDir = layout[ key ];
            if ( typeof pathOrNestedDir === 'string' ) {
                const type = prevObjName + key;
                const to = currentPath + pathOrNestedDir.replace('dummy', 'App');
                const from = textFiles[ type ];
                writeToFile( to, from );
            } else {
                const name = key === 'component' || key === 'container' ? 'app': 'dummy'
                const wasGenerated = generateType( key, currentPath, name );
                if (!wasGenerated) {
                    createDirAndFiles( pathOrNestedDir, currentPath, key );
                }
            }
        })
        return true;
    }
    function generateType( type, where, name ){
        const layout = generatorLayouts( type );
        if ( !layout ) {
            return false;
        }
        let currentPath = where + layout.path;
        createDir( currentPath );
        name = firstLetterToUpper( name ); 
        let jsTo;
        if ( layout.dummy ) {
            const dummy = layout.dummy;
            currentPath = currentPath + '/' + name;
            const wasCreated = createDir( currentPath, true );           
            if ( wasCreated ) {
                return false;
            }
            const cssTo = currentPath + replaceDummy( dummy.css, name )                        
            writeToFile( cssTo );
            jsTo = currentPath + replaceDummy( dummy.js, name );            
        }else {
            jsTo = currentPath + replaceDummy( layout.js, name );            
            const indexTo = currentPath + layout.index;            
            const indexFrom = replaceDummy( textFiles[ type + 'Index' ].toString(), name );
            writeToFile( indexTo, indexFrom );
        }            
        const jsFrom = replaceDummy( textFiles[ type + 'Js' ].toString(), name )
        writeToFile( jsTo, jsFrom );            
        return true;
    }
    function create( projectName, isRedux ){
        textFiles.packageJson = textFiles.packageJson.toString().replace('dummy', projectName );
        const layout = creatorLayouts( projectName, isRedux );
        return createDirAndFiles( layout );
    }
    function generate( type, where, name ){
        return generateType( type, where, name )
    }
    return {
        create,
        generate
    }
})();

