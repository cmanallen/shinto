var KanbanActions = require('../actions/KanbanActions');


module.exports = {

	get: function(url, callback) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callback(null, xhr.responseText);
				} else {
					callback(xhr.statusText);
				}
			}
		};
		xhr.send();
	},

	submit: function(type, url, data, callback) {
		var xhr = new XMLHttpRequest();

		xhr.open(type, url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callback(null, xhr.responseText);
				} else {
					callback(xhr.statusText);
				}
			}
		};
		xhr.send(data);
	},

	getBoards: function() {
		var ctx;
		get('/api/v1/boards', function(err, resp) {
			if (!err) {
				ctx = JSON.parse(response);
			} else {
				ctx = err;
			}
		});

		// Propogate action
		KanbanActions.receiveAll(ctx);
	},

}