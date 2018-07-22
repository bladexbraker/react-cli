"use strict";
module.exports = {
    cru: {
        ...require('./create'),
        ...require('./remove'),
        ...require('./update')
    },
    options: {
        ...require('./options')
    }
}