import React from 'react';

import './App.css';

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

export default App;
