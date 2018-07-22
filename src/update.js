const fs = require('fs');
const path = require('path');
const directoryPaths = {
    src: path.resolve( __dirname, 'src'),
    actions: path.resolve( __dirname, 'actions'),
    actionTypes: path.resolve( __dirname, 'actionTypes'),
    components: path.resolve( __dirname, 'components'),
    containers: path.resolve( __dirname, 'containers'),
    reducer: path.resolve( __dirname, 'reducer'),
    shared: path.resolve( __dirname, 'shared'),
    appComponent: path.resolve( __dirname, 'src/components/App')
}
const filePaths = {
    read: {
        packageJson: path.resolve( __dirname, 'packageJson.text'),
        entry: path.resolve( __dirname, 'entry.text'),
        appJs: path.resolve( __dirname, 'appJs.text')
    },
    write: {
        packageJson: path.resolve( __dirname, 'package.json'),
        entry: path.resolve(__dirname, 'src/index.js'),
        appCss: path.resolve( __dirname, 'src/components/App/App.view.jsx'),
        appJs: path.resolve( __dirname, 'src/components/App/App.less')
    }
}
function dirExistsSync(dir) {
    const doesExist = fs.existsSync(dir);
    if (doesExist){
        throw Error('Directive already Exists');
    }    
    fs.mkdirSync(dir);
}
module.exports = ( function() {
    const update = ( type ) => {
        console.log('update');
        switch(type) {
            case "r":
            case "react":
            case "React": {
                console.log('ok');
                dirExistsSync( directoryPaths.src );
                fs.writeFileSync( filePaths.write.entry , fs.readFileSync( filePaths.read.entry ) );
                break;
            }
            case "a":
            case "ang":
            case "angular":
            case "Angular": {
                // fs.mkdirSync( directoryPaths.src );
                // fs.writeFileSync( filePaths.write.index , fs.readFileSync( filePaths.read.index ) );
            }
            default: {
                return;
            }
        }
    }
    return {
        update,
        u: update
    }
})();