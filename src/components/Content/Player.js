import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Profile from './Profile';
import Categories from './Categories';

const Player = (props) => {
	return (
		<Wrapper className="Player">
			<Profile details={props.details} />
			<Categories details={props.details} />
		</Wrapper>
	);
};

Player.propTypes = {
	details : PropTypes.object.isRequired,
};

export default Player;

const Wrapper = styled.div`
	padding: 1rem;

	@media screen and (max-width: 800px) {
		border-bottom: 1px solid black;
	}
`;
