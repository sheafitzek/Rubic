import React from 'react';

import './PlayerSelect.css';

import PropTypes from 'prop-types';

class PlayerSelect extends React.Component {
	goToApp(e) {
		e.preventDefault();

		// variable to include in route below
		const players = `${this.player1.value}-vs-${this.player2.value}`;

		// invoke callback function passed as props from Index.js
		this.props.getPlayers(`${this.player1.value}`, `${this.player2.value}`);

		// compose a route with the above variable that should lead to App.js
		this.context.router.transitionTo(`/compare/${players}`);
	}

	render() {
		return (
			<form className="player-selector" onSubmit={(e)=> this.goToApp(e)}> {/* inline binding */}
				{/* input value from forms should update player1 & player2 props in the getPlayers function */}
				<h2>Please Enter the Competitors</h2>
				<p>You must either enter two github usernames or two github repos</p>
				<input
					type="text"
					placeholder="User/Repo Name"
					ref={(input)=> {this.player1 = input}}
					required
				/>
				<input
					type="text"
					placeholder="User/Repo Name"
					ref={(input)=> {this.player2 = input}}
					required
				/>
				<button type="submit">Compare 🡒</button>
			</form>
		)
	}
}

// needed to access BrowserRouter from index.js & compose the route above
PlayerSelect.contextTypes = {
	router: PropTypes.object,
}

export default PlayerSelect;
