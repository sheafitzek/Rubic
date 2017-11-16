import React from 'react';

import styled from 'styled-components';

import Profile from './Profile';
import Categories from './Categories';

class Player extends React.Component {
	render() {
		return (
			<Wrapper className="Player">
				<Profile details={this.props.details} />
				<Categories details={this.props.details} />
			</Wrapper>
		);
	}
}

export default Player;

const Wrapper = styled.div`
	padding: 1rem;

	@media screen and (max-width: 800px) {
		border-bottom: 1px solid black;
	}
`;
