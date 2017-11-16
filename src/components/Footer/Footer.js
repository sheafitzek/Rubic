import React from 'react';

import styled from 'styled-components';

class Footer extends React.Component {
	render() {
		return (
			<Wrapper className="App-Footer">
				<p>
					Made with React, Styled-Components, Axios & the Github API for {' '}
					<a
						href="https://chingu-cohorts.github.io/chingu-directory/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Chingu Cohorts.
					</a>
				</p>
			</Wrapper>
		);
	}
}

export default Footer;

const Wrapper = styled.div`
	background: rgba(0, 217, 255, 0.25);
	text-align: center;

	p {
		font-family: 'Electrolize';
	}
`;
