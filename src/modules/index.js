"use strict";
const fs = require('fs');
// const path = require('path');
// const npm = require('npm');
// const nopt = require('nopt');
const textFiles = require('../textFiles');
const { functions: { replaceDummy, log }, strings: { CREATE, WARNING  } } = require('../shared');
const { creatorLayouts, generatorLayouts } = require('../layouts');

module.exports = ( function() {
    function create( location, name, isRedux, shouldInstall ){
        textFiles.packageJson = textFiles.packageJson.toString().replace( /dummy/g, name );
        textFiles.componentJs = textFiles.componentJs.toString().replace( /Dummy/g, 'App' );
        if ( isRedux ) {
            textFiles.containerJs = textFiles.packageJson.toString().replace( /Dummy/g, 'App' );
            textFiles.srcIndex = textFiles.srcIndex.toString().replace( 'components', 'containers' );            
        }
        const regExp = new RegExp( name, 'i' );
        const layout = creatorLayouts( location.replace( regExp, '/' ), name, isRedux, shouldInstall );
        createDirAndFiles( layout );
        return true;
    }
    function generate( type, where, name ) {
        const regExp = new RegExp( name, 'i' );
        const layout = generatorLayouts( type, where.replace( regExp, '/' ) , name );
        createDirAndFiles( layout ) 
        return true;
    }
    function createDirAndFiles( layout, parentPath = '' ) {
        const { path, files, dirs } = layout
        const fullPath = parentPath + path;
        createDir( fullPath );
        createFiles( files, fullPath );
        if ( dirs ) {
            dirs.forEach( dir => {
                createDirAndFiles( dir, fullPath );
            });                
        }
    }
    function createDir( dir ) {
        if ( isPathInvalid( dir )  ) {
            throw new Error( 'Give wrong or none existent location' );
        }
        const doesExist = fs.existsSync(dir);
        if (doesExist){
            getLogMessage( dir, 'folder', WARNING ); 
            return true;
        }
        fs.mkdirSync(dir);
        getLogMessage( dir, 'folder', CREATE );       
        return false;
    }
    function isPathInvalid( path ) {
        if ( path &&  typeof path === 'string'  ) {
            const allPaths = path.split('/');
            allPaths.pop();
            for (let index = 0, l = allPaths.length; index < l; index++) {
                const dir = allPaths.slice( 0 , index + 1 ).join('/');
                if ( !fs.existsSync( dir ) ) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    function createFiles( files, parentPath ) {
        if ( !files ) {
            return;
        }
        files.forEach( ({ type, location }) => {
            if ( type && location ) {
                const to = parentPath + location;
                const from = textFiles[ type ];
                writeToFile( to, from );
            }
        });
    }
    function writeToFile( to, from = null ) {
        if ( fs.existsSync(to) ) {
            getLogMessage( to, 'file', WARNING ) ;
            return true;        
        }
        fs.writeFileSync( to, from || '' );        
        getLogMessage( to, 'file', CREATE );
        return false;        
    }
    function getLogMessage( dir, fileOrFolder, type ) {
        const locations = dir.split('/');
        const currentDir = locations.pop()
        const message = `${ fileOrFolder }: ${ currentDir } ${ type === WARNING ? 'already exists ' : '' }${ locations.length > 1 ? `in ${locations.join('/')}` : '' }`;
        log( type, message );
    }
    return {
        create,
        generate
    }
})();

