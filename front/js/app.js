/**
 * App JS
 */


var React = require('react');

var App = require('./components/Kanban.react');
var Api = require('./utils/WebAPI');


Api.getBoards();


React.render(
	<App />,
	document.getElementById('app')
);
