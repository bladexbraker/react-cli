"use strict";
const { SRC, COMPONENTS, SHARED, ACTION_TYPES, ACTIONS, CONTAINERS, REDUCERS } = require('../constants')
module.exports = ( function() {
    const layout = {
        path: './',
        packageJson: '/package.json',
        babelRc: '/.babelrc',
        gitIgnore: '/.gitignore',
        webPack: '/webpack.config.js',
        server: '/app.js',
        modules: {
            path: '/modules',
            dummyModule: '/test.module.js',
            modules: '/index.js'
        },
        routes: {
            path: '/routes',
            dummyRoute: '/dummy.route.js',
            routes: '/index.js'
        },
        public: {
            path: '/public',
            scripts: {
                path: '/script',
            },
        },
        src: {
            path: `/${ SRC }`, 
            entry: '/index.js',
            components: {
                path: `/${ COMPONENTS }`,
                app: {
                    path: '/App',
                    appJs: '/App.view.jsx',
                    appCss: '/App.less'
                }
            },
            shared: { 
                path: `/${ SHARED }`
            }
        },
    }
    const reduxLayout = {
        ...layout,
        src: {
            ...layout.src, 
            actionTypes: { 
                path: `/${ ACTION_TYPES }`
            },
            actions: { 
                path: `/${ ACTIONS}`
            },
            containers: { 
                path: `/${ CONTAINERS }`
            },
            reducer: { 
                path: `/${ REDUCERS }`
            }
        }
    }
    function generateLayout( home, isRedux )  {
        if (isRedux) {
            reduxLayout.path += home;
            console.log('reduxLayout: ', reduxLayout);
            return reduxLayout;
        }
        layout.path += home;
        return { progress: 21, layout };
    };
    
    return {
        generateLayout
    }
})( );