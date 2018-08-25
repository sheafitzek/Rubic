import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Categories = (props) => {
	return [
		<CategoryItem key="pubReposOwned">
			<div key="category" data-key="category">
				Public Repos Owned:
			</div>
			<div key="result" data-key="result">
				{props.details.pubReposOwned}
			</div>
		</CategoryItem>,

		<CategoryItem key="pubReposContrib">
			<div key="category" data-key="category">
				Public Repos Contrib:
			</div>
			<div key="result" data-key="result">
				{props.details.pubReposContrib}
			</div>
		</CategoryItem>,

		<CategoryItem key="commits">
			<div key="category" data-key="category">
				Commits:
			</div>
			<div key="result" data-key="result">
				{props.details.commits}
			</div>
		</CategoryItem>,

		<CategoryItem key="gists">
			<div key="category" data-key="category">
				Gists:
			</div>
			<div key="result" data-key="result">
				{props.details.gists}
			</div>
		</CategoryItem>,

		<CategoryItem key="followers">
			<div key="category" data-key="category">
				Followers:
			</div>
			<div key="result" data-key="result">
				{props.details.followers}
			</div>
		</CategoryItem>,

		<CategoryItem key="following">
			<div key="category" data-key="category">
				Following:
			</div>
			<div key="result" data-key="result">
				{props.details.following}
			</div>
		</CategoryItem>,

		<CategoryItem key="stargazers">
			<div key="category" data-key="category">
				Stargazers:
			</div>
			<div key="result" data-key="result">
				{props.details.stargazers}
			</div>
		</CategoryItem>,

		<CategoryItem key="forks">
			<div key="category" data-key="category">
				Forks:
			</div>
			<div key="result" data-key="result">
				{props.details.forks}
			</div>
		</CategoryItem>,

		<CategoryItem key="hasBeenForked">
			<div key="category" data-key="category">
				Has Been Forked:
			</div>
			<div key="result" data-key="result">
				{props.details.hasBeenForked}
			</div>
		</CategoryItem>,

		<CategoryItem key="topLanguage">
			<div key="category" data-key="category">
				Top Language:
			</div>
			<div key="result" data-key="result">
				{props.details.topLanguage}
			</div>
		</CategoryItem>,

		<CategoryItem key="memberTimeDisplay">
			<div key="category" data-key="category">
				Member For:
			</div>
			<div key="result" data-key="result">
				{props.details.memberTimeDisplay}
			</div>
		</CategoryItem>,
	];
};

Categories.propTypes = {
	details : PropTypes.object.isRequired,
};

export default Categories;

const CategoryItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div[data-key="category"] {
		color: darkgray;
	}

	div[data-key="result"] {
		font-family: "Share Tech Mono";
	}
`;
