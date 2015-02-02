/**
 * Sorting Options
 */


var React = require('react');


var Sort = React.createClass({
	render: function() {
		return (
			<nav id="controls">
				<ul>
					<li><span class="glyphicon glyphicon-th"></span></li>
					<li><span class="glyphicon glyphicon-menu-hamburger"></span></li>
				</ul>
			</nav>
		)
	},
});


module.exports = Sort;