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
				<div className="activity-name">
					Name:
					<input 
						ref="name"
						defaultValue={this.props.name}
					/>
				</div>
				<div className="activity-position">
					Position:
					<input 
						ref="position"
						defaultValue={this.props.position}
					/>
				</div>
				<button 
					className="activity-save"
				>
					Save
				</button>
			</li>
		)
	},
});


module.exports = Activity;