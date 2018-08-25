import React from 'react';

import styled from 'styled-components';

const Header = () => {
	return (
		<Wrapper className="App-header">
			<h1 className="App-title">Welcome to Rubic</h1>
			<h2>Compare Github User Stats</h2>
			<p>
				Why Rubic? React + {` `}
				<a
					href="https://bevacqua.github.io/hubby/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hubby {` `}
				</a>
				+ Clone
			</p>
			<p>
				How often do you <span>"crack the code"?</span>
			</p>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	background: rgba(0, 217, 255, 0.25);
	text-align: center;

	h1 {
		font-family: "Audiowide";
	}

	h2 {
		font-family: "Courgette";
		color: #222;
	}

	p {
		font-family: 'Electrolize';
		margin: 0 0 0.5rem 0;

		span {
			font-family: "Courgette";
		}

		:last-of-type {
			margin-bottom: 1rem;
		}
	}
`;
