/**
 * Activities
 */


var React = require('react');


var Activity = React.createClass({

	getInitialState: function() {
		return {
			position: this.props.position,
			name: this.props.activity.name,
		}
	},

	render: function() {
		return (
			<li className='activity'>
				<p>{this.props.activity}</p>
			</li>
		)
	},
});


module.exports = Activity;