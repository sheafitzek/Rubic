import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PlayerSelect from './components/PlayerSelect';
import NotFound from './components/NotFound';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const Root = ()=> {
	return(
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={PlayerSelect}/>
					<Route path="/compare/" component={App}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector(`#root`));
