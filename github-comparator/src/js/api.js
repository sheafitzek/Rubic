// url for basic user stats: https://api.github.com/users/<user>
// url for user commit stats: https://api.github.com/search/commits?q=committer:<user>
// url for user repo stats: https://api.github.com/search/repositories?q=user:<user>

import axios from 'axios';

export function apiQuery(player) {
	// console.log(`1: this`, this);

	this.getPlayerStats(player).then((data) => {
		// console.log(`3: this`, this);
		// console.log(`4: this.state`, this.state);
		// console.log(`5: data`, data);
		const languages = data.repoData.data.items.reduce((sum, item, index) => {
			item.language in sum ? sum[item.language]++ : (sum[item.language] = 1);

			return sum;
		}, {});

		const topLanguage = Object.keys(languages).reduce((a, b) => {
			return languages[a] > languages[b] ? a : b;
		});

		if (player === this.props.player1) {
			this.setState({
				users : Object.assign(this.state.users, {
					player1 : {
						avatar    : data.userData.data.avatar_url,
						handle    : data.userData.data.login,
						name      : data.userData.data.name,
						type      : data.userData.data.type,
						repos     : data.userData.data.public_repos,
						gists     : data.userData.data.public_gists,
						followers : data.userData.data.followers,
						following : data.userData.data.following,
						language  : topLanguage,
					},
				}),
			});
		} else {
			this.setState({
				users : Object.assign(this.state.users, {
					player2 : {
						avatar    : data.userData.data.avatar_url,
						handle    : data.userData.data.login,
						name      : data.userData.data.name,
						type      : data.userData.data.type,
						repos     : data.userData.data.public_repos,
						gists     : data.userData.data.public_gists,
						followers : data.userData.data.followers,
						following : data.userData.data.following,
						language  : topLanguage,
					},
				}),
			});
		}
		// console.log(`6: this.state`, this.state);
	});
}

export function getPlayerStats(player) {
	const userUrl = `https://api.github.com/users/${player}`;
	const repoUrl = `https://api.github.com/search/repositories?q=user:${player}`;
	const commitUrl = `https://api.github.com/search/commits?q=committer:${player}`;

	const commitUrlConfig = {
		headers : {
			Accept : 'application/vnd.github.cloak-preview+json',
		},
	};

	return axios
		.all([axios.get(userUrl), axios.get(repoUrl), axios.get(commitUrl, commitUrlConfig)])
		.then(
			axios.spread(function(userData, repoData, commitData) {
				// console.log(`2: data`, userData.data);
				// console.log(`2: data`, repoData.data);
				// console.log(`2: data`, commitData.data);
				return {userData, repoData, commitData};
			})
		)
		.catch(function(error) {
			console.log(error);
		});
}
