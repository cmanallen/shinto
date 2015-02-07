/**
 * Shinto App
 */


var Header = require('./Header.react'),
	Footer = require('./Footer.react'),
	Sort = require('./Sort.react'),
	Board = require('./Board.react'),
	React = require('react'),
	Store = require('../stores/ShintoStore');


function getShintoState() {
	return {
		boards: Store.retrieve(),
	}
}


var ShintoApp = React.createClass({
	getInitialState: function() {
		return getShintoState();
	},

	componentDidMount: function() {
		Store.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this._onChange);
	},

	render: function() {
		var nodes = this.state.boards;
		var boards = nodes.map(function(board) {
			return (
				<Board 
					board={board['name']} 
					cards={board['cards']}
					refresh={this._onChange}
				/>
			)
		}, this);
		return (
			<div>
				<Header />
				<Sort />
				<main>
					{boards}
				</main>
				<Footer />
			</div>
		)
	},

	_onChange: function() {
		this.setState(getShintoState());
	},
});


module.exports = ShintoApp;