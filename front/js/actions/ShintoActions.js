/**
 * Actions
 */


var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ShintoConstants = require('../constants/ShintoConstants');


var ShintoActions = {
	create: function() {
		AppDispatcher.dispatch({
			actionType: ShintoConstants.TODO_CREATE,
			text: text,
		});
	},
};