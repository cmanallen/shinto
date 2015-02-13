/**
 * Boards
 */


var React = require('react');
var Card = require('./Card.react');


var Board = React.createClass({

	propTypes: {
		board: React.PropTypes.object,
		depth: React.PropTypes.array,
		refresh: React.PropTypes.func.isRequired,
	},
	
	getInitialState: function() {
		return {
			cards: this.props.board.cards,
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
							this.props.board.position-1
						]['cards']
					}
				/>
			)
		}, this);
		return (
			<section className='row'>
				<h3 className='board-title'>{this.props.board.name}</h3>
				<ul>
					{cards}
				</ul>
			</section>
		)
	},

});


module.exports = Board;