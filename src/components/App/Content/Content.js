import React from 'react';

import './Content.css';

import Player from './Player';

class Content extends React.Component {
	// this.props.<function>();

	render() {
		return(
			<div className="App-Content">
				<h1>Content</h1>
				<ul className="players">
					{/*{
						Object
							.keys(this.state.players)
							.map((key)=>
								<Player key={key} details={this.state.players[key]}/>
							)
					}*/}
				</ul>

				<button className="try-again" onClick={this.props.goToPlayerSelect}>Try Again</button>
			</div>
		)
	}
}

export default Content;
