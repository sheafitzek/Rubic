import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class PlayerSelect extends React.Component {
	constructor(props) {
		super(props);

		this.goToApp = this.goToApp.bind(this);
	}
	goToApp(e) {
		e.preventDefault();

		// variable to include in route below
		const players = `${this.player1.value}-vs-${this.player2.value}`;

		// invoke callback function passed as props from Index.js
		this.props.getPlayers(`${this.player1.value}`, `${this.player2.value}`);

		// compose a route with the above variable that should lead to App.js
		this.context.router.history.push(`/compare/${players}`);
	}

	render() {
		return [
			<Header />,
			<Form className="player-selector" onSubmit={this.goToApp}>
				{/* input value from forms should update player1 & player2 props in the getPlayers function */}
				<h2>Choose the Competitors</h2>
				<p>Enter two github usernames</p>
				<div className="input">
					<div className="icon-case">
						<i className="fa fa-github-alt" />
					</div>
					<input
						type="text"
						placeholder="Player 1"
						ref={(input) => {
							this.player1 = input;
						}}
						required
					/>
				</div>
				<button type="submit">↑ Compare ↓</button>
				<div className="input">
					<div className="icon-case">
						<i className="fa fa-github-alt" />
					</div>
					<input
						type="text"
						placeholder="Player 2"
						ref={(input) => {
							this.player2 = input;
						}}
						required
					/>
				</div>
			</Form>,
			<Footer />,
		];
	}
}

// needed to access BrowserRouter from index.js & compose the route above
PlayerSelect.contextTypes = {
	router : PropTypes.object.isRequired,
};

export default PlayerSelect;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	flex: 1;

	margin: 1rem 0 1rem 0;
	padding: 1rem;
	color: whitesmoke;
	font-family: 'Electrolize';
	background: rgba(0, 0, 0, 0.25);

	h2 {
		margin-top: 0;
		color: red;
		font-family: 'Frijole';
		text-align: center;
	}

	.icon-case {
		display: flex;

		width: 2rem;
		height: 2rem;
		padding: 0.25rem;
		border-radius: 5px 0px 0px 5px;
		background: lightblue;
		position: relative;
		text-align: center;
		line-height: 2rem;
	}

	.input {
		display: flex;
	}

	i {
		margin: auto;
		color: black;
		font-size: 1.25rem;
	}

	input {
		height: 2rem;
		padding-left: 0.5rem;
		border-radius: 0px 5px 5px 0px;
	}

	button {
		margin: 1.5rem;
		height: 1.5rem;
		color: lightgreen;
		font-family: 'Electrolize';
		background: transparent;
		border: 1.5px solid lightgreen;
		border-radius: 3px;
	}
`;
