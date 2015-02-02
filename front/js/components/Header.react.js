/**
 * Header
 */


var React = require('react'),
	ShintoActions = require('../actions/ShintoActions');


var Header = React.createClass({
	render: function() {
		return (
			<header>
				<h2>Shinto</h2>
			</header>
		);
	},
});


module.exports = Header;