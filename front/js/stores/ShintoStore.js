/**
 * Shinto Store
 */


var AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events').EventEmitter,
	ShintoConstants = require('../constants/ShintoConstants'),
	assign = require('object-assign');


var CHANGE_EVENT = 'change',
	_boards = [];


var ShintoStore = assign({}, EventEmitter.prototype, {

});


module.exports = ShintoStore;