module.exports = {
    ACTION_TYPES: 'actionTypes',
    ACTIONS: 'actions',
    CONTAINERS: 'containers',
    COMPONENTS: 'components',
    REDUCERS: 'reducers',
    SHARED: 'shared',
    SRC: 'src',
    AUTHOR: 'author',
    DESCRIPTION: 'description',
    NAME: 'name',
    HELP: 'help',
    TYPE_CHOICES: [
        'component', 
        'comp',
        'c',
        'container', 
        'cont',
        'ct',
        'reducer', 
        'red',
        'r',
        'act',
        'a',
        'action',
        'actionType',
        'acte',
        'at',
        'module',
        'mod',
        'm',
        'route', 
        'rot',
        'r'
    ],
    getTypeName: type => {
        let name = type;
        switch (type) {
            case 'comp':
            case 'c': {
                name = 'component';
                break;
            }
            case 'cont':
            case 'ct': {
                name = 'container';
                break;
            }
            case 'red':
            case 'r': {
                name = 'reducer';
                break;
            }
            case 'red':
            case 'r': {
                name = 'reducer';
                break;
            }
            case 'act':
            case 'a': {
                name = 'action';
                break;
            }
            case 'acte':
            case 'at': {
                name = 'actionType';
                break;
            }
            case 'mod':
            case 'm': {
                name = 'module';
                break;
            } 
            case 'rot':
            case 'r': {
                name = 'route';
                break;
            }
        }
        return name;
    }
}
