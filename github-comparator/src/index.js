import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import './index.css';

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
			<BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <PlayerSelect getPlayers={this.getPlayers} />}
          />

          <Route
            path="/compare/"
            render={(props) => (
              <App player1={this.player1} player2={this.player2} />
            )}
          />

          <Route component={NotFound} />
        </Switch>
			</BrowserRouter>
		);
	}
}

render(<Root />, document.querySelector(`#root`));

// registerServiceWorker();
