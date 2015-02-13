/**
 * Cards
 */


var React = require('react'),
	Activity = require('./Activity.react');


var Card = React.createClass({
	
	getInitialState: function() {
		return {
			activities: this.props.card.activities,
		}
	},

	moveUp: function() {
		var current = this.props.card.position,
			above = current - 1;

		if (above > 0) {
			this.props.depth.swap(current, above);
		}
		
		return this.props.refresh();
	},

	moveDown: function() {
		var current = this.props.card.position,
			below = current + 1;

		if (below <= this.props.depth.length) {
			this.props.depth.swap(current, below);
		}
		
		return this.props.refresh();
	},

	render: function() {
		var activities = this.state.activities.sort(function(a, b) {
			return a.position - b.position;
		}).map(function(activity) {
			return (
				<Activity 
					key={activity['id']}
					activity={activity}
					refresh={this.props.refresh}
					depth={this.props.depth[this.props.card.position-1]['activities']}
				/>
			)
		}, this);
		return (
			<li className='card'>
				<h4>
					{this.props.card.name}
					<span
						className="move"
						onClick={this.moveUp}
					>^</span> 
					<span
						className="move"
						onClick={this.moveDown}
					>v</span>
				</h4>
				<ul>
					{activities}
				</ul>
			</li>
		)
	},

});


module.exports = Card;