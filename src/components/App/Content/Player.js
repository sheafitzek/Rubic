import React from 'react';

import Profile from './Profile';
import Categories from './Categories';

class Player extends React.Component {
	render() {
		return(
			<div class="Player">
				<Profile/>
				<Categories/>
			</div>
		)
	}
}


export default Player;
