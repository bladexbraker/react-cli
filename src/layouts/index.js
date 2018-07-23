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
                    dummyComponent: '/App.view.jsx',
                    dummyCss: '/App.less'
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
                path: `/${ ACTION_TYPES }`,
                actionTypesIndex: '/index.js',
                dummyActionType: '/dummy.actionType.js'
            },
            actions: { 
                path: `/${ ACTIONS}`,
                actionsIndex: '/index.js',
                dummyAction: '/dummy.action.js'
            },
            containers: { 
                path: `/${ CONTAINERS }`,
                app: {
                    path: '/App',
                    dummyContainer: '/App.view.jsx',
                    dummyCss: '/App.less'
                }
            },
            reducer: { 
                path: `/${ REDUCERS }`,
                reducerIndex: '/index.js',
                dummyReducer: '/dummy.reducer.js'
            }
        }
    }
    function generateLayout( home, isRedux )  {
        if (isRedux) {
            reduxLayout.path += home;
            return reduxLayout;
        }
        layout.path += home;
        return layout;
    };
    
    return {
        generateLayout
    }
})( );