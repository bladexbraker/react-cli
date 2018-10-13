"use strict";
const {
    SRC,
    MODULES,
    SHARED,
    ROUTES,
    COMPONENTS,
    ACTION_TYPES,
    ACTIONS,
    CONTAINERS,
    REDUCERS,
    packageJson,
    gitIgnore,
    server,
    babelRc,
    webPack,
    indexHtml,
    reducerIndex,
    srcIndex,
    actionTypeIndex,
    actionIndex,
    moduleIndex,
    routeIndex,
    actionTypeJs,
    actionJs,
    reducerJs,
    moduleJs,
    routeJs,
    componentJs,
    containerJs,
    css
} = require('../shared/strings')
module.exports = (function () {
    const getComponent = ( where, name ) => ({
        path: where || `/${ COMPONENTS }`,
        dirs: [{
            path: name ? '/' + name : '/App',
            files: [{
                type: componentJs,
                location: `/${ name || 'App' }.view.jsx`
            }, {
                type: css,
                location: `/${ name || 'App' }.less`
            }]
        }]
    });
    const getContainer = ( where, name ) => ({
        path: where || `/${ CONTAINERS }`,
        dirs: [{
            path: name ? '/' + name : '/App',
            files: [{
                type: componentJs,
                location: `/${ name || 'App' }.view.jsx`
            }, {
                type: css,
                location: `/${ name || 'App' }.less`
            }]
        }]
    });
    const getActionType = ( where, name ) => ({
        path: where || `/${ ACTION_TYPES }`,
        files: [where ? {} : {
            type: actionTypeIndex,
            location: '/index.js',
        }, {
            type: actionTypeJs,
            location: `/${ name ||'Dummy' }.actionType.js`
        }]
    });
    const getAction = ( where, name ) => ({
        path: where || `/${ ACTIONS }`,
        files: [where ? {} : {
            type: actionIndex,
            location: '/index.js',
        }, {
            type: actionTypeJs,
            location: `/${ name ||'Dummy' }.action.js`
        }]
    });
    const getReducer = ( where, name ) => ({
        path: where || `/${ REDUCERS }`,
        files: [where ? {} : {
            type: reducerIndex,
            location: '/index.js',
        }, {
            type: actionTypeJs,
            location: `/${ name ||'Dummy' }.reducer.js`
        }]
    });
    const getModule = ( where, name ) => ({
        path: where || `/${  MODULES }`,
        files: [where ? {} : {
            type: moduleIndex,
            location: '/index.js',
        }, {
            type: actionTypeJs,
            location: `/${ name ||'Dummy' }.module.js`
        }]
    });
    const getRoute = ( where, name ) => ({
        path: where || `/${ ROUTES }`,
        files: [where ? {} : {
            type: routeIndex,
            location: '/index.js',
        }, {
            type: actionTypeJs,
            location: `/${ name ||'Dummy' }.route.js`
        }]
    });
    const generateLayout = {
        component: getComponent,
        container: getContainer,
        actionType: getActionType,
        action: getAction,
        reducer: getReducer,
        module: getModule,
        route: getRoute
    }
    const createLayout = {
        path: './',
        files: [{
            type: packageJson,
            location: '/package.json'
        }, {
            type: babelRc,
            location: '/.babelrc'
        }, {
            type: gitIgnore,
            location: '/.gitignore'
        }, {
            type: webPack,
            location: '/webpack.config.js'
        }, {
            type: server,
            location: '/app.js'
        }, {
            type: indexHtml,
            location: '/index.html'
        }],
        dirs: [{
            path: '/public',
            dirs: [{
                path: '/scripts'
            }, {
                path: '/styles'
            }]
        }, {
            path: `/${ SHARED }`
        }, {
            path: `/${ SRC }`,
            files: [{
                type: srcIndex,
                location: '/index.js'
            }],
            dirs: [
                getComponent(),
                getModule(),
                getRoute()
            ]
        }]
    }
    const createReduxLayout = createLayout;
    createReduxLayout.dirs[2].dirs = [
        ...createReduxLayout.dirs[2].dirs,
        getContainer(),
        getActionType(),
        getAction(),
        getReducer()
    ];

    function generatorLayouts( type, where, name ) {
        return  generateLayout[type]( where, name );
    };

    function creatorLayouts( where, name, isRedux ) {
        const layout = isRedux ? createReduxLayout : createLayout;
        layout.path = where + name;
        return layout;
    };
    return {
        generatorLayouts,
        creatorLayouts
    };
})();