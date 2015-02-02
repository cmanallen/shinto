/**
 * Boards
 */


var React = require('react'),
	Card = require('./Card.react');


var Board = React.createClass({
	getInitialState: function() {
		return {
			cards: this.props.cards,
		}
	},

	render: function() {
		var cards = this.state.cards.sort(function(a, b) {
			return parseFloat(a.id) - parseFloat(b.id);
		}).map(function(card) {
			return (
				<Card 
					card={card['name']} 
					activities={card['activities']} 
				/>
			)
		});
		return (
			<section className='row'>
				<h3 className='board-title'>{this.props.board}</h3>
				<ul>
					{cards}
				</ul>
			</section>
		)
	}
});


module.exports = Board;