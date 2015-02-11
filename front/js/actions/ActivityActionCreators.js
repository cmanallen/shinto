/**
 * Actions
 */


var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ShintoConstants = require('../constants/ShintoConstants'),
	Activity = require('../utils/ActivityAPIInterface'),
	Utils = require('../utils/ActivityUtils');


module.exports = {
	
	create: function(name, card, user, creator) {
		AppDispatcher.dispatch({
			type: ShintoConstants.ACTIVITY_NEW,
			name: name,
			card: card,
			user: user,
			creator: 1, // hard coded until auth
		});
		var activity = null;

	},

};