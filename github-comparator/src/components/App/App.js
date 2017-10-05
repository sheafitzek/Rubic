import React from 'react';

import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class App extends React.Component {
	constructor() {
		super();

		// bind functions 'this' to App
		// this.<function> = this.<function>.bind(this);

		// initial state
		this.state = {
			users: {
				user1: {
					name: `user1`,
					repos: 0,
					stars: 0,
					commits: 0,
				},
				user2: {
					name: `user2`,
					repos: 0,
					stars: 0,
					commits: 0,
				},
			},
			repos: {
				repo1: {
					name: `repo1`,
					contributers: 0,
					stars: 0,
					commits: 0,
				},
				repo2: {
					name: `repo2`,
					contributers: 0,
					stars: 0,
					commits: 0,
				}
			}
		}
	}

	// functions to parse API call & change state
	// <function>(){
		
	// }

	render() {
		return (
			<div className="App">
				<Header/>
				<Content /> {/* <function>={this.<function>} */}
				<Footer/>
			</div>
		);
	}
}

export default App;
