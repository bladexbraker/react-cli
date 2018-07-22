'use strict';
const CREATE = require( './create.command' );
const DELETE = require( './delete.command' );
const UPDATE = require( './update.command' );
module.exports = ( function() {
    return {
        CREATE,
        DELETE,
        UPDATE    
    }
})( );