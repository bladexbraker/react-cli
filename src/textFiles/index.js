"use strict";
const fs = require('fs');
const path = require('path');
module.exports = {
    indexHtml: fs.readFileSync( path.resolve( __dirname, './indexHtml.txt' ) ),
    packageJson: fs.readFileSync( path.resolve( __dirname, './packageJson.txt' ) ),
    gitIgnore: fs.readFileSync( path.resolve( __dirname, './gitIgnore.txt' ) ),
    server: fs.readFileSync( path.resolve( __dirname, './server.txt' ) ),
    babelRc: fs.readFileSync( path.resolve( __dirname, './babelRc.txt' ) ),
    srcIndex: fs.readFileSync( path.resolve( __dirname, './entry.txt' ) ),
    webPack: fs.readFileSync( path.resolve( __dirname, './webPack.txt' ) ),
    actionTypeIndex: fs.readFileSync( path.resolve( __dirname, './actionTypesIndex.txt' ) ),
    actionTypeJs: fs.readFileSync( path.resolve( __dirname, './dummyActionType.txt' ) ),
    actionIndex: fs.readFileSync( path.resolve( __dirname, './actionsIndex.txt' ) ),
    actionJs: fs.readFileSync( path.resolve( __dirname, './dummyAction.txt' ) ),
    reducerIndex: fs.readFileSync( path.resolve( __dirname, './reducerIndex.txt' ) ),
    reducerJs: fs.readFileSync( path.resolve( __dirname, './dummyReducer.txt' ) ),
    moduleIndex: fs.readFileSync( path.resolve( __dirname, './modules.txt' ) ),
    moduleJs: fs.readFileSync( path.resolve( __dirname, './dummyModule.txt' ) ),
    routeIndex: fs.readFileSync( path.resolve( __dirname, './routesIndex.txt' ) ),
    routeJs: fs.readFileSync( path.resolve( __dirname, './dummyRoute.txt' ) ),
    componentJs: fs.readFileSync( path.resolve( __dirname, './dummyComponent.txt' ) ),
    containerJs: fs.readFileSync( path.resolve( __dirname, './dummyContainer.txt' ) ),
    internalPackageJson: fs.readFileSync( path.resolve( __dirname, '../../package.json' ) )
}