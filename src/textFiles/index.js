"use strict";
const fs = require('fs');
const path = require('path');
module.exports = {
    packageJson: fs.readFileSync( path.resolve( __dirname, './packageJson.txt' ) ),
    modules: fs.readFileSync( path.resolve( __dirname, './modules.txt' ) ),
    dummyRoute: fs.readFileSync( path.resolve( __dirname, './dummyRoute.txt' ) ),
    dummyModule: fs.readFileSync( path.resolve( __dirname, './dummyModule.txt' ) ),
    routes: fs.readFileSync( path.resolve( __dirname, './routes.txt' ) ),
    server: fs.readFileSync( path.resolve( __dirname, './server.txt' ) ),
    babelRc: fs.readFileSync( path.resolve( __dirname, './babelRc.txt' ) ),
    gitIgnore: fs.readFileSync( path.resolve( __dirname, './gitIgnore.txt' ) ),
    webPack: fs.readFileSync( path.resolve( __dirname, './webPack.txt' ) ),
    entry: fs.readFileSync( path.resolve( __dirname, './entry.txt' ) ),
    appJs: fs.readFileSync( path.resolve( __dirname, './appJs.txt' ) ),
    help: fs.readFileSync( path.resolve( __dirname, './help.txt' ) ),
    internalPackageJson: fs.readFileSync( path.resolve( __dirname, '../../package.json' ) )
}