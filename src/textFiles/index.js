"use strict";
const fs = require('fs');
const path = require('path');
module.exports = {
    packageJson: fs.readFileSync( path.resolve( __dirname, './packageJson.txt' ) ),
    gitIgnore: fs.readFileSync( path.resolve( __dirname, './gitIgnore.txt' ) ),
    modules: fs.readFileSync( path.resolve( __dirname, './modules.txt' ) ),
    routes: fs.readFileSync( path.resolve( __dirname, './routes.txt' ) ),
    server: fs.readFileSync( path.resolve( __dirname, './server.txt' ) ),
    babelRc: fs.readFileSync( path.resolve( __dirname, './babelRc.txt' ) ),
    entry: fs.readFileSync( path.resolve( __dirname, './entry.txt' ) ),
    webPack: fs.readFileSync( path.resolve( __dirname, './webPack.txt' ) ),
    actionTypesIndex: fs.readFileSync( path.resolve( __dirname, './actionTypesIndex.txt' ) ),
    actionsIndex: fs.readFileSync( path.resolve( __dirname, './actionsIndex.txt' ) ),
    reducerIndex: fs.readFileSync( path.resolve( __dirname, './reducerIndex.txt' ) ),
    dummyRoute: fs.readFileSync( path.resolve( __dirname, './dummyRoute.txt' ) ),
    dummyModule: fs.readFileSync( path.resolve( __dirname, './dummyModule.txt' ) ),
    dummyComponent: fs.readFileSync( path.resolve( __dirname, './dummyComponent.txt' ) ),
    dummyContainer: fs.readFileSync( path.resolve( __dirname, './dummyContainer.txt' ) ),
    dummyActionType: fs.readFileSync( path.resolve( __dirname, './dummyActionType.txt' ) ),
    dummyAction: fs.readFileSync( path.resolve( __dirname, './dummyAction.txt' ) ),
    dummyReducer: fs.readFileSync( path.resolve( __dirname, './dummyReducer.txt' ) ),
    internalPackageJson: fs.readFileSync( path.resolve( __dirname, '../../package.json' ) )
}