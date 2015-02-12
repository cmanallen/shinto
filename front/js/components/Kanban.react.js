/**
 * Shinto App
 */


var Header = require('./Header.react');
var Footer = require('./Footer.react');
var Sort = require('./Sort.react');
var Board = require('./Board.react');
var React = require('react');
var Store = require('../stores/KanbanStore');


function getKanbanState() {
	return {
		boards: Store.getAll(),
	}
};


var Kanban = React.createClass({

	getInitialState: function() {
		return getKanbanState();
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
					key={board['id']}
					board={board['name']}
					position={board['position']}
					cards={board['cards']}
					refresh={this._onChange}
					depth={this.state.boards}
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
		this.setState(getKanbanState());
	},

});


module.exports = Kanban;