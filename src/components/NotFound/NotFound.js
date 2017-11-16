import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class NotFound extends React.Component {
	constructor(props) {
		super(props);

		this.goToPlayerSelect = this.goToPlayerSelect.bind(this);
	}

	goToPlayerSelect() {
		this.context.router.history.push(`/`);
	}
	render() {
		return [
			<Header />,
			<Content>
				<p>Are You Sure That Those Both Users Exist?</p>
				<p>Please Check Your Spelling & Try Again.</p>
				<h2>There Seems to be an Error!</h2>
				<p>If you are sure that the usernames are valid,</p>
				<p>please wait 1 minute and try again.</p>

				<button className="try-again 🗘" onClick={this.goToPlayerSelect}>
					Try Again
				</button>
			</Content>,
			<Footer />,
		];
	}
}

// needed to access BrowserRouter from index.js & compose the route above
NotFound.contextTypes = {
	router : PropTypes.object.isRequired,
};

export default NotFound;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	flex: 1;

	width: 100%;
	padding: 1rem;
	margin: 1rem 0 1rem 0;
	color: whitesmoke;
	font-family: 'Electrolize';
	background: rgba(0, 0, 0, 0.25);
	text-align: center;

	p {
		margin-top: 0;
	}

	h2 {
		margin-top: 0;
		color: red;
		font-family: 'Frijole';
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
