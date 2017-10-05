import React from 'react';

import './PlayerSelect.css';

import PropTypes from 'prop-types';

class PlayerSelect extends React.Component {

	goToApp(e) {
		e.preventDefault();

		const players = `${this.Player1.value}-vs-${this.player2.value}`;

		// callback from Index.js
		this.props.getPlayers(`${this.player1.value}`, `${this.player2.value}`);

		this.context.router.transitionTo(`/compare/${players}`);
	}

	render() {
		return (
			<form className="player-selector" onSubmit={(e)=> this.goToApp(e)}> {/* inline binding */}
				<h2>Please Enter the Competitors</h2>
				<p>You must either enter two github usernames or two github repos</p>
				<input type="text" placeholder="User/Repo Name" ref={(input)=> {this.Player1 = input}} required/>
				<input type="text" placeholder="User/Repo Name" ref={(input)=> {this.Player2 = input}} required/>
				<button type="submit">Compare 🡒</button>
			</form>
		)
	}
}

// access BrowserRouter from index.js
PlayerSelect.contextTypes = {
	router: PropTypes.object,
}

export default PlayerSelect;
