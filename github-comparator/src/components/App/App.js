import React from 'react';

import './App.css';

import PropTypes from 'prop-types';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import {apiQuery, getPlayerStats} from '../../js/api';

// import userStats from '../../js/getUserStats';

class App extends React.Component {
	constructor() {
		super();

		// bind functions 'this' to App
		// this.<function> = this.<function>.bind(this);
		this.goToNotFound = this.goToNotFound.bind(this);

		this.apiQuery = apiQuery.bind(this);
		this.getPlayerStats = getPlayerStats.bind(this);

		// initial state
		this.state = {
			users : {
				player1 : {},
				player2 : {},
			},
		};
	}

	goToNotFound(e) {
		e.preventDefault();

		this.context.router.history.push(`/not-found/`);
	}

	componentDidMount() {
		this.apiQuery(this.props.player1);
		this.apiQuery(this.props.player2);
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Content player1={this.state.users.player1} player2={this.state.users.player2} />
				<Footer />
			</div>
		);
	}
}

// needed to access BrowserRouter from index.js & compose the route above
App.contextTypes = {
	router : PropTypes.object.isRequired,
};

export default App;
