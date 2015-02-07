/**
 * Cards
 */


var React = require('react'),
	Activity = require('./Activity.react');


var Card = React.createClass({
	getInitialState: function() {
		return {
			activities: this.props.activities,
		}
	},

	render: function() {
		var activities = this.state.activities.map(function(activity) {
			return (
				<Activity 
					activity={activity['name']}
					position={activity['position']}
					card={activity['card']}
					refresh={this.props.refresh}
				/>
			)
		}, this);
		return (
			<li className='card'>
				<h4>{this.props.card}</h4>
				<ul>
					{activities}
				</ul>
			</li>
		)
	}
});


module.exports = Card;