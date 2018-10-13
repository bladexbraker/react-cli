"use strict";
const fs = require('fs');
const path = require('path');
module.exports = {
    internalPackageJson: fs.readFileSync( path.resolve( __dirname, '../../package.json' ) ),    
    packageJson: fs.readFileSync( path.resolve( __dirname, './packageJson.txt' ) ),
    gitIgnore: fs.readFileSync( path.resolve( __dirname, './gitIgnore.txt' ) ),
    server: fs.readFileSync( path.resolve( __dirname, './server.txt' ) ),
    babelRc: fs.readFileSync( path.resolve( __dirname, './babelRc.txt' ) ),
    webPack: fs.readFileSync( path.resolve( __dirname, './webPack.txt' ) ),
    indexHtml: fs.readFileSync( path.resolve( __dirname, './indexHtml.txt' ) ),
    reducerIndex: fs.readFileSync( path.resolve( __dirname, './reducerIndex.txt' ) ),
    srcIndex: fs.readFileSync( path.resolve( __dirname, './entry.txt' ) ),
    actionTypeIndex: fs.readFileSync( path.resolve( __dirname, './actionTypesIndex.txt' ) ),
    actionIndex: fs.readFileSync( path.resolve( __dirname, './actionsIndex.txt' ) ),
    moduleIndex: fs.readFileSync( path.resolve( __dirname, './modules.txt' ) ),
    routeIndex: fs.readFileSync( path.resolve( __dirname, './routesIndex.txt' ) ),
    actionTypeJs: fs.readFileSync( path.resolve( __dirname, './dummyActionType.txt' ) ),
    actionJs: fs.readFileSync( path.resolve( __dirname, './dummyAction.txt' ) ),
    reducerJs: fs.readFileSync( path.resolve( __dirname, './dummyReducer.txt' ) ),
    moduleJs: fs.readFileSync( path.resolve( __dirname, './dummyModule.txt' ) ),
    routeJs: fs.readFileSync( path.resolve( __dirname, './dummyRoute.txt' ) ),
    componentJs: fs.readFileSync( path.resolve( __dirname, './dummyComponent.txt' ) ),
    containerJs: fs.readFileSync( path.resolve( __dirname, './dummyContainer.txt' ) )
}