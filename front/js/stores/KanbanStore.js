/**
 * Kanban Store
 */


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KanbanConstants = require('../constants/KanbanConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';
var _boards = [];


var KanbanStore = assign({}, EventEmitter.prototype, {
	
	get: function(id) {
		return _boards[id];
	},

	getAll: function() {
		return _boards;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

});


AppDispatcher.register(function(action) {
	
	switch(action.type) {

		case KanbanConstants.CARD_NEW:
			// createCard(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.CARD_DESTROY:
			// destroyCard(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.ACTIVITY_NEW:
			// createActivity(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.ACTIVITY_COMPLETE:
			// destroyActivity(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.ACTIVITY_DESTROY:
			// destroyActivity(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.COMMENT_NEW:
			// createComment(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.COMMENT_DESTROY:
			// destroyComment(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.RECEIVE_BOARDS;
			_boards = action.boards;
			KanbanStore.emitChange();
			break;

	};

});


module.exports = KanbanStore;