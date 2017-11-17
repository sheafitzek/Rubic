import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components';

import App from './components/App/App';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import NotFound from './components/NotFound/NotFound';

class Root extends React.Component {
	constructor() {
		super();

		let player1 = null;
		let player2 = null;
		this.getPlayers = this.getPlayers.bind(this);
	}

	// callback to get players from PlayerSelect.js
	getPlayers = (player1, player2) => {
		this.player1 = player1;
		this.player2 = player2;
	};
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route
						key="playerSelect"
						exact
						path="/"
						render={(props) => <PlayerSelect getPlayers={this.getPlayers} />}
					/>
					<Route
						key="app"
						path="/compare/"
						render={(props) => <App player1={this.player1} player2={this.player2} />}
					/>
					<Route key="notFound" component={NotFound} />
				</Switch>
			</HashRouter>
		);
	}
}

render(<Root />, document.querySelector(`#root`));

registerServiceWorker();

injectGlobal`
	*, *:before, *:after {
		box-sizing: border-box;
	}

	html {
		display: flex;
		justify-content: center;
		align-items: stretch;

		min-height: 100%;
	}

	body {
		display: flex;
		justify-content: center;
		align-items: stretch;

		flex: 1;

		margin: 0;
		padding: 0;
		background: #7A419B;
		background: linear-gradient(135deg, #7c1599 0%, #921099 48%, #7e4ae8 100%);
		background-size: cover;
	}

	#root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;

		flex: 1;

		padding: 0;

		PlayerSelect,
		NotFound,
		App {
			display: flex;
			justify-content: center;
			align-items: stretch;
		}
`;
