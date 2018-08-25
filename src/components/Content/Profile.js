import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = (props) => {
	return [
		<Handle key="Handle">{props.details.handle}</Handle>,
		<Wrapper key="Player-Profile">
			<img src={props.details.avatar} alt="Avatar" />

			<div>
				<div key="name">
					<span>
						Name:{` `}
						<span className="result">
							{props.details.name}
						</span>
					</span>
				</div>

				<div key="location">
					<span>
						Location:{` `}
						<span className="result">
							{props.details.location}
						</span>
					</span>
				</div>

				<div key="type">
					<span>
						Member Type:{` `}
						<span className="result">
							{props.details.type}
						</span>
					</span>
				</div>

				<div key="memberSince">
					<span>
						Member Since:{` `}
						<span className="result">
							{props.details.memberSince}
						</span>
					</span>
				</div>

				<div key="html_url">
					<span>
						Github Profile:{` `}
						<span className="result">
							<a
								href={props.details.html_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								Link
							</a>
						</span>
					</span>
				</div>
			</div>
		</Wrapper>,
	];
};

Profile.propTypes = {
	details : PropTypes.object.isRequired,
};

export default Profile;

const Wrapper = styled.div`
	display: flex;

	padding-bottom: 1rem;

	img {
		width: 6rem;
		height: 6rem;
		outline: 1px solid lightblue;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		padding-left: 0.75rem;

		a {
			color: lightblue;
		}

		div {
			span.result {
				color: lightblue;
			}
		}
	}

	@media screen and (max-width: 800px) {
		flex-direction: column;

		> div {
			padding: 1rem 0 0 0;

			div {
				padding-left: 0;
			}
		}
	}
`;

const Handle = styled.h2`
	font-family: "Share Tech Mono";
	color: lightgreen;
	margin-top: 0;
`;
