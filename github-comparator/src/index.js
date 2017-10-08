import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './components/App/App';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import NotFound from './components/NotFound/NotFound';

const Root = ()=> {
	// callback to get players from PlayerSelect.js
	const getPlayers = (player1, player2)=> {
		this.props.player1 = player1;
		this.props.player2 = player2;
	}
	const SelectPlayers = (props) => {
		return (
			<PlayerSelect
				getPlayers = {getPlayers}
			/>
		);
	}
	return(
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={SelectPlayers}/>
					{/*<Route path="/compare/" component={App}/>*/}
					<Route path="/compare/" render={(props)=> ( <App player1={this.player1} player2={this.player2}/> )} />
					<Route component={NotFound}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector(`#root`));

// registerServiceWorker();
