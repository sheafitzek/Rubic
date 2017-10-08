import React from 'react';

import './PlayerSelect.css';

import PropTypes from 'prop-types';

class PlayerSelect extends React.Component {

	goToApp(e) {
		e.preventDefault();
		
		const player1 = this.Player1.value;
		const player2 = this.Player2.value;
		const players = `${player1}-vs-${player2}`;

		// callback from Index.js
		this.props.getPlayers(`${player1}`, `${player2}`);

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
