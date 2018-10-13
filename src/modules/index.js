"use strict";
const fs = require('fs');
// const path = require('path');
// const npm = require('npm');
// const nopt = require('nopt');
const textFiles = require('../textFiles');
const { functions: { replaceDummy }, colors } = require('../shared');
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
            throw console.error( errorLog( 'Give wrong or none existent path/location' ) );
        }
        const doesExist = fs.existsSync(dir);
        if (doesExist){
            console.error( infoLog( dir, 'folder' ) ); 
            return true;
        }
        fs.mkdirSync(dir);
        console.info( createLog( dir, 'folder' ) );       
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
            console.info( infoLog( to, 'file' )  );
            return true;        
        }
        fs.writeFileSync( to, from || '' );        
        console.info(createLog( to, 'file' ) );
        return false;        
    }
    function createLog( dir, type ) {
        const locations = dir.split('/');
        const currentDir = locations.pop()
        return `${ colors.greenBright('[ created ]') } ${ type }: ${ currentDir } ${ locations.length > 1 ? `in ${locations.join('/')}` : '' }`;
    }
    function infoLog( dir, type ) {
        const locations = dir.split('/');
        const currentDir = locations.pop()
        return `${ colors.yellowBright('[ info ]') } ${ type }: ${ currentDir } already exists ${ locations.length > 1 ? `in ${locations.join('/')}` : '' }`;
    }
    function errorLog( content ) {
        return `${ colors.redBright('[ error ]') } ${ content } `;
    }
    return {
        create,
        generate
    }
})();

