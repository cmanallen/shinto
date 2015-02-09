/**
 * Activities
 */


var React = require('react');
var Utils = require('../utils/utils');


var Activity = React.createClass({

	propTypes: {
		activity: React.PropTypes.string,
		position: React.PropTypes.number,
		refresh: React.PropTypes.func.isRequired,
	},

	getInitialState: function() {
		return {
			position: this.props.position,
			activity: this.props.activity,
		}
	},

	moveUp: function() {
		var current = this.props.position,
			above = current - 1;

		if (above > 0) {
			this.props.depth.swap(current, above);
		}
		
		return this.props.refresh();
	},

	moveDown: function() {
		var current = this.props.position,
			below = current + 1;

		if (below <= this.props.depth.length) {
			this.props.depth.swap(current, below);
		}
		
		return this.props.refresh();
	},

	render: function() {
		return (
			<li>
				<p>
					{this.state.activity}
					<span
						className="move"
						onClick={this.moveUp}
					>^</span> 
					<span
						className="move"
						onClick={this.moveDown}
					>v</span>
				</p>
			</li>
		)
	},
});


module.exports = Activity;