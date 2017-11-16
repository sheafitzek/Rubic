import React from 'react';

import styled from 'styled-components';

import Player from './Player';

class Content extends React.Component {
	render() {
		return (
			<Wrapper className="App-Content">
				<ul className="players">
					{Object.keys(this.props.details).map((key) => (
						<Player key={key} details={this.props.details[key]} />
					))}
				</ul>

				<button className="try-again" onClick={this.props.goToPlayerSelect}>
					Try Again
				</button>
			</Wrapper>
		);
	}
}

export default Content;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	flex: 1;

	width: 100%;
	padding: 0 1rem 1rem 1rem;
	margin: 1rem 0 1rem 0;
	color: whitesmoke;
	font-family: 'Electrolize';
	background: rgba(0, 0, 0, 0.25);
	text-align: center;

	ul {
		display: flex;
		flex-direction: row;

		padding: 0 1rem 1rem 1rem;
		margin-top: 0;
	}

	button {
		height: 1.5rem;
		color: lightgreen;
		font-family: 'Electrolize';
		background: transparent;
		border: 1.5px solid lightgreen;
		border-radius: 3px;
	}

	@media (max-width: 800px) {
		ul {
			flex-direction: column;

			margin-bottom: 0;
		}
	}
`;
