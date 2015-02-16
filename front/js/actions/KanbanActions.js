/**
 * Actions
 */


var AppDispatcher = require('../dispatcher/AppDispatcher');
var KanbanConstants = require('../constants/KanbanConstants');


var KanbanActions = {

	receiveAll: function(boards) {
		AppDispatcher.handleServerAction({
			type: KanbanConstants.RECEIEVE_BOARDS,
			boards: boards,
		});
	},

	createCard: function(card) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.CARD_NEW,
			name: card.name,
			position: card.position,
			board: card.board,
		});
	},

	destroyCard: function(id) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.CARD_DESTROY,
			id: id,
		});
	},

	createActivity: function(activity) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.ACTIVITY_NEW,
			name: activity.name,
			position: activity.position,
			card: activity.card,
			user: activity.user,
			creator: activity.creator,
		});
	},

	completeActivity: function(id) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.ACTIVITY_COMPLETE,
			id: id,
		});
	},

	destroyActivity: function(id) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.ACTIVITY_DESTROY,
			id: id,
		});
	},

	createComment: function(comment) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.COMMENT_NEW,
			body: comment.body,
			activity: comment.activity,
		});
	},

	destroyComment: function(id) {
		AppDispatcher.dispatch({
			actionType: KanbanConstants.COMMENT_DESTROY,
			id: id,
		});
	},

};


module.exports = KanbanActions;