/**
 * Sorting Options
 */


var React = require('react');


var Sort = React.createClass({
	render: function() {
		return (
			<nav id="controls">
				<ul>
					<li><span className="glyphicon glyphicon-th">Cards</span></li>
					<li><span className="glyphicon glyphicon-menu-hamburger">List</span></li>
				</ul>
			</nav>
		)
	},
});


module.exports = Sort;