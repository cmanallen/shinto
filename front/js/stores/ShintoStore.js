/**
 * Shinto Store
 */


var AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events').EventEmitter,
	ShintoConstants = require('../constants/ShintoConstants'),
	assign = require('object-assign');


var CHANGE_EVENT = 'change',
	_boards = [
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


var ShintoStore = assign({}, EventEmitter.prototype, {
	retrieve: function() {
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


module.exports = ShintoStore;