import React from 'react';
import PropTypes from 'prop-types';

import {apiQuery, getPlayerStats} from '../../js/api';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class App extends React.Component {
	constructor() {
		super();

		// bind functions 'this' to App
		// this.<function> = this.<function>.bind(this);
		this.goToNotFound = this.goToNotFound.bind(this);
		this.goToPlayerSelect = this.goToPlayerSelect.bind(this);

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
		this.apiQuery(this.props.match.params.player1);
		this.apiQuery(this.props.match.params.player2);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.state !== nextState;
	// }

	goToNotFound() {
		this.context.router.history.push(`/not-found/`);
	}
	goToPlayerSelect() {
		this.context.router.history.push(`/`);
	}

	render() {
		return [
			<Header key="header" />,
			<Content
				key="content"
				details={this.state.users}
				goToPlayerSelect={this.goToPlayerSelect}
			/>,
			<Footer key="footer" />,
		];
	}
}

App.contextTypes = {
	router : PropTypes.object.isRequired,
};

App.propTypes = {
	match : PropTypes.shape({
		params : PropTypes.object.isRequired,
	}).isRequired,
};

export default App;
