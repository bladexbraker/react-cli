"use strict";
const { SRC, MODULES, SHARED, ROUTES, COMPONENTS, ACTION_TYPES, ACTIONS, CONTAINERS, REDUCERS } = require('../shared/strings')
module.exports = ( function() {
    const component = {
        path: `/${ COMPONENTS }`,
        dummy: {
            path: '/Dummy',
            js: '/Dummy.view.jsx',
            css: '/Dummy.less'
        } 
    };
    const container = { 
        path: `/${ CONTAINERS }`,
        dummy: {
            js: '/Dummy.view.jsx',
            css: '/Dummy.less'
        }
    };
    const actionType = {
        path: `/${ ACTION_TYPES }`,
        index: '/index.js',
        js: '/Dummy.actionType.js',
    };
    const action = {
        path: `/${ ACTIONS }`,
        index: '/index.js',
        js: '/Dummy.action.js',
    };
    const reducer = {
        path: `/${ REDUCERS }`,
        index: '/index.js',
        js: '/Dummy.reducer.js'
    };
    const module = {
        path: `/${ MODULES }`,
        index: '/index.js',
        js: '/Dummy.module.js'
    };
    const route = {
        path: `/${ ROUTES }`,
        index: '/index.js',
        js: '/Dummy.route.js'
    };
    const generateLayout = {
        component,
        container,
        actionType,
        action, 
        reducer,
        module,
        route
    }
    const createLayout = {
        path: './',
        packageJson: '/package.json',
        babelRc: '/.babelrc',
        gitIgnore: '/.gitignore',
        webPack: '/webpack.config.js',
        server: '/app.js',
        indexHtml: '/index.html',
        public: {
            path: '/public',
            scripts: {
                path: '/scripts',
            }
        },    
        shared: { 
            path: `/${ SHARED }`
        },
        src: {
            path: `/${ SRC }`, 
            Index: '/index.js',
            component,
        },
        module,
        route
    }
    const createReduxLayout = {
        ...createLayout,
        src: {
            ...createLayout.src, 
            container,
            actionType,
            action, 
            reducer
        }
    }
    function generatorLayouts( type )  {
        return generateLayout[ type ];
    };    
    function creatorLayouts( home, isRedux )  {
        if (isRedux) {
            createReduxLayout.path += home;
            return createReduxLayout;
        }
        createLayout.path += home;
        return createLayout;
    };
    return {
        generatorLayouts,
        creatorLayouts
    };
})( );