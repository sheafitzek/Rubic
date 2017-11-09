import axios from 'axios';
import moment from 'moment';

export function apiQuery(player) {
	this.getPlayerStats(player).then((data) => {
		if (data === undefined) {
			this.goToNotFound();
			return;
		}

		let userData = data.userData.data;
		let commitData = data.commitData.data;
		let repoData = data.roughRepoData.reduce((a, b) => a.concat(b), []);

		const stargazers = repoData.reduce((sum, item, index) => {
			sum += item.stargazers_count;

			return sum;
		}, 0);

		const forks = repoData.reduce((sum, item, index) => {
			item.fork === true && sum++;

			return sum;
		}, 0);

		const hasBeenForked = repoData.reduce((sum, item, index) => {
			sum += item.stargazers_count;

			return sum;
		}, 0);

		const languages = repoData.reduce((sum, item, index) => {
			item.language in sum ? sum[item.language]++ : (sum[item.language] = 1);

			return sum;
		}, {});

		const topLanguage = Object.keys(languages).reduce((a, b) => {
			return languages[a] > languages[b] ? a : b;
		});

		const formatDate = function(date, format) {
			let diff = moment(date).diff(moment(), 'milliseconds');
			let duration = moment.duration(diff);

			let since = moment(date).format('MM/DD/YYYY');
			let compare = `${-duration.asYears().toFixed(2)} years`;
			let display = `${-duration.years()} yrs, ${-duration.months()} mos, ${-duration.days()} days, ${-duration.hours()} hrs`;

			return format === `since` ? since : format === `compare` ? compare : display;
		};

		const memberSince = formatDate(userData.created_at, `since`);
		const memberTimeCompare = formatDate(userData.created_at, `compare`);
		const memberTimeDisplay = formatDate(userData.created_at, `display`);

		if (player === this.props.player1) {
			this.setState({
				users : Object.assign(this.state.users, {
					player1 : {
						// profile data
						avatar            : userData.avatar_url,
						handle            : userData.login,
						name              : userData.name,
						type              : userData.type,
						location          : userData.html_url,
						memberSince       : memberSince,

						// comparison data
						pubReposOwned     : data.pubReposOwned,
						pubReposContrib   : userData.public_repos,
						commits           : commitData.total_count,
						gists             : userData.public_gists,
						followers         : userData.followers,
						following         : userData.following,
						stargazers        : stargazers,
						forks             : forks,
						hasBeenForked     : hasBeenForked,
						languages         : languages,
						topLanguage       : topLanguage,
						memberTimeCompare : memberTimeCompare,
						memberTimeDisplay : memberTimeDisplay,
					},
				}),
			});
		} else {
			this.setState({
				users : Object.assign(this.state.users, {
					player2 : {
						// profile data
						avatar            : userData.avatar_url,
						handle            : userData.login,
						name              : userData.name,
						type              : userData.type,
						location          : userData.html_url,
						memberSince       : memberSince,

						// comparison data
						pubReposOwned     : data.pubReposOwned,
						pubReposContrib   : userData.public_repos,
						commits           : commitData.total_count,
						gists             : userData.public_gists,
						followers         : userData.followers,
						following         : userData.following,
						stargazers        : stargazers,
						forks             : forks,
						hasBeenForked     : hasBeenForked,
						languages         : languages,
						topLanguage       : topLanguage,
						memberTimeCompare : memberTimeCompare,
						memberTimeDisplay : memberTimeDisplay,
					},
				}),
			});
		}
	});
}

export function getPlayerStats(player) {
	const userUrl = `https://api.github.com/users/${player}`;
	const repoUrl = `https://api.github.com/search/repositories?q=user:${player}&per_page=100`;
	const commitUrl = `https://api.github.com/search/commits?q=committer:${player}&per_page=100`;

	const commitUrlConfig = {
		headers : {
			Accept : 'application/vnd.github.cloak-preview+json',
		},
	};

	let data = {};
	let roughRepoData = [];
	let pubReposOwned;

	function getRepoStats(link) {
		let linkHeaders;
		const LastLinkMatch = new RegExp(/([0-9]*)>; rel="last"/, ``);
		let lastLink;
		let promises = [fetch(link)];

		return fetch(link)
			.then((response) => {
				linkHeaders = response.headers.get('Link');
				if (linkHeaders !== null && linkHeaders.includes(`rel="next"`)) {
					lastLink = linkHeaders.match(LastLinkMatch)[1];

					for (let i = 2; i <= lastLink; i++) {
						promises.push(
							fetch(
								`https://api.github.com/search/repositories?q=user:${player}&per_page=100&page=${i}`
							)
						);
					}
				}
			})
			.then(() => {
				return Promise.all(promises);
			})
			.then((data) => {
				data.forEach((item) => {
					item.json().then((data) => {
						roughRepoData.push(data.items);
						pubReposOwned = data.total_count;
					});
				});
			});
	}

	return getRepoStats(repoUrl).then(() => {
		return axios
			.all([axios.get(userUrl), axios.get(commitUrl, commitUrlConfig)])
			.then(
				axios.spread(function(userData, commitData) {
					return {userData, commitData};
				})
			)
			.then((userData, commitData) => {
				Object.assign(data, userData, commitData, {roughRepoData}, {pubReposOwned});
				return data;
			})
			.catch(function(error) {
				console.log(`error:`, error);
			});
	});
}
