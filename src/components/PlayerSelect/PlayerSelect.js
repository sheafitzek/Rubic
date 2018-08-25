import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class PlayerSelect extends React.Component {
	constructor(props) {
		super(props);

		this.goToApp = this.goToApp.bind(this);
	}

	componentDidMount() {
		this.player1Input.focus();
	}

	goToApp(e) {
		e.preventDefault();

		const players = `${this.player1Input.value}-vs-${this
			.player2Input.value}`;

		this.context.router.history.push(`/compare/${players}`);
	}

	render() {
		return [
			<Header key="header" />,
			<Form
				key="form"
				className="player-selector"
				onSubmit={(e) => this.goToApp(e)}
			>
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
							this.player1Input = input;
						}}
						required
					/>
				</div>

				<div className="input">
					<div className="icon-case">
						<i className="fa fa-github-alt" />
					</div>
					<input
						type="text"
						placeholder="Player 2"
						ref={(input) => {
							this.player2Input = input;
						}}
						required
					/>
				</div>

				<button type="submit">Compare</button>
			</Form>,
			<Footer key="footer" />,
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
		margin: 0 0 1.5rem 0;
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
		height: 1.5rem;
		color: lightgreen;
		font-family: 'Electrolize';
		background: transparent;
		border: 1.5px solid lightgreen;
		border-radius: 3px;
	}
`;
