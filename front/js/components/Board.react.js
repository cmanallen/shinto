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
			return a.position - b.position;
		}).map(function(card) {
			return (
				<Card 
					key={card['id']}
					card={card}
					refresh={this.props.refresh}
					depth={
						this.props.depth[
							this.props.position-1
						]['cards']
					}
				/>
			)
		}, this);
		return (
			<section className='row'>
				<h3 className='board-title'>{this.props.board}</h3>
				<ul>
					{cards}
				</ul>
			</section>
		)
	},

});


module.exports = Board;