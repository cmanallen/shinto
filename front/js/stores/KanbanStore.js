/**
 * Kanban Store
 */


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KanbanConstants = require('../constants/KanbanConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';
var _boards = [
	{
		"url": "http://localhost:8000/api/v1/board/1/", 
		"id": 1, 
		"name": "Family Chores", 
		"position": 1, 
		"cards": [
			{
				"id": 1, 
				"name": "Colton", 
				"position": 1, 
				"activities": [
					{
						"id": 1, 
						"name": "Make Bed", 
						"position": 1, 
						"card": 1, 
						"comments": []
					}, 
					{
						"id": 4, 
						"name": "Make React Frontend", 
						"position": 2, 
						"card": 1, 
						"comments": []
					}, 
					{
						"id": 5, 
						"name": "Test Position", 
						"position": 3, 
						"card": 1, 
						"comments": []
					}
				]
			}, 
			{
				"id": 2, 
				"name": "Ashley", 
				"position": 2, 
				"activities": [
					{
						"id": 2, 
						"name": "Make Dinner", 
						"position": 1, 
						"card": 2, 
						"comments": []
					},
					{
						"id": 6, 
						"name": "Go to work", 
						"position": 2, 
						"card": 2, 
						"comments": []
					}
				]
			}, 
			{
				"id": 3, 
				"name": "Bloo", 
				"position": 3, 
				"activities": [
					{
						"id": 3, 
						"name": "Lick Butt", 
						"position": 1, 
						"card": 3, 
						"comments": [
							{
								"id": 1, 
								"body": "Shouldn't be too hard for you..."
							}
						]
					}
				]
			}
		]
	}
];


function createCard(card) {
	// Some POST request
};


function destroyCard(card) {
	// Some DELETE request
};


function createActivity(activity) {
	// Some POST request
};


function updateAllActivities(activities) {
	// Some looped PUT request
};


function destroyActivity(activity) {
	// Some DELETE request
};


function createComment(comment) {
	// Some POST request
};


function destroyComment(comment) {
	// Some DELETE request
};


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
	
	switch(action.ActionType) {

		case KanbanConstants.CARD_NEW:
			createCard(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.CARD_DESTROY:
			destroyCard(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.ACTIVITY_NEW:
			createActivity(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.ACTIVITY_DESTROY:
			destroyActivity(action.id);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.COMMENT_NEW:
			createComment(action);
			KanbanStore.emitChange();
			break;

		case KanbanConstants.COMMENT_DESTROY:
			destroyComment(action.id);
			KanbanStore.emitChange();
			break;

	}

});


module.exports = KanbanStore;