import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {injectGlobal} from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import NotFound from './components/NotFound/NotFound';

const basename = window.location.origin.includes(`github.io`)
	? `/${window.location.pathname.split(`/`)[1]}`
	: ``;

const Root = () => {
	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route
					key="playerSelect"
					exact
					path="/"
					component={PlayerSelect}
				/>
				<Route path="/compare/:player1-vs-:player2" component={App} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

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
	}
`;
