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
		var activities = this.state.activities.sort(function(a, b) {
			return a.position - b.position;
		}).map(function(activity) {
			return (
				<Activity 
					key={activity['id']}
					activity={activity['name']}
					position={activity['position']}
					card={activity['card']}
					refresh={this.props.refresh}
					depth={this.props.depth[this.props.position-1]['activities']}
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