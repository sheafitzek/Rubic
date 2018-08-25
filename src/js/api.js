import axios from 'axios';
import moment from 'moment';

export function apiQuery(player) {
	getPlayerStats(player).then((data) => {
		if (!data) {
			this.goToNotFound();

			return;
		}

		const userData = data.userData.data;
		const commitData = data.commitData.data;
		const repoData = data.roughRepoData.reduce(
			(a, b) => a.concat(b),
			[]
		);

		const stargazers = repoData.reduce((sum, item) => {
			sum += item.stargazers_count;

			return sum;
		}, 0);

		const forks = repoData.reduce((sum, item) => {
			item.fork === true && (sum += 1);

			return sum;
		}, 0);

		const hasBeenForked = repoData.reduce((sum, item) => {
			sum += item.stargazers_count;

			return sum;
		}, 0);

		const languages = repoData.reduce((sum, item) => {
			item.language in sum
				? (sum[item.language] += 1)
				: (sum[item.language] = 1);

			return sum;
		}, {});

		const topLanguage = Object.keys(
			languages
		).reduce((a, b) => {
			return languages[a] > languages[b] ? a : b;
		});

		const formatDate = function(date, format) {
			const diff = moment(date).diff(
				moment(),
				`milliseconds`
			);
			const duration = moment.duration(diff);

			const since = moment(date).format(`MM/DD/YYYY`);
			const compare = `${-duration
				.asYears()
				.toFixed(2)} years`;
			const display = `${-duration.years()}y ${-duration.months()}m ${-duration.days()}d`;

			return format === `since`
				? since
				: format === `compare` ? compare : display;
		};

		const memberSince = formatDate(
			userData.created_at,
			`since`
		);
		const memberTimeCompare = formatDate(
			userData.created_at,
			`compare`
		);
		const memberTimeDisplay = formatDate(
			userData.created_at,
			`display`
		);

		// const newState = {...this.state};

		const playerNum =
			player === this.props.match.params.player1
				? `player1`
				: `player2`;

		this.setState({
			users : Object.assign(this.state.users, {
				[playerNum] : {
					// profile data
					avatar            : userData.avatar_url,
					handle            : userData.login,
					name              : userData.name,
					type              : userData.type,
					location          : userData.location,
					html_url          : userData.html_url,
					memberSince,

					// comparison data
					pubReposOwned     : data.pubReposOwned,
					pubReposContrib   : userData.public_repos,
					commits           : commitData.total_count,
					gists             : userData.public_gists,
					followers         : userData.followers,
					following         : userData.following,
					stargazers,
					forks,
					hasBeenForked,
					languages,
					topLanguage,
					memberTimeCompare,
					memberTimeDisplay,
				},
			}),
		});
	});
}

export function getPlayerStats(player) {
	const userUrl = `https://api.github.com/users/${player}`;
	const repoUrl = `https://api.github.com/search/repositories?q=user:${player}&per_page=100`;
	const commitUrl = `https://api.github.com/search/commits?q=committer:${player}&per_page=100`;

	const commitUrlConfig = {
		headers : {
			Accept : `application/vnd.github.cloak-preview+json`,
		},
	};

	const gitData = {};
	const roughRepoData = [];
	let pubReposOwned;

	function getRepoStats(link) {
		let linkHeaders;
		const LastLinkMatch = new RegExp(
			/([0-9]*)>; rel="last"/,
			``
		);
		let lastLink;
		const promises = [fetch(link)];

		return fetch(link)
			.then((response) => {
				linkHeaders = response.headers.get(`Link`);
				if (
					linkHeaders !== null &&
					linkHeaders.includes(`rel="next"`)
				) {
					lastLink = linkHeaders.match(
						LastLinkMatch
					)[1];

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
			.then((blob) => {
				blob.forEach((item) => {
					item.json().then((data) => {
						roughRepoData.push(data.items);
						pubReposOwned = data.total_count;
					});
				});
			});
	}

	return getRepoStats(repoUrl).then(() => {
		return axios
			.all([
				axios.get(userUrl),
				axios.get(commitUrl, commitUrlConfig),
			])
			.then(
				axios.spread((userData, commitData) => {
					return {userData, commitData};
				})
			)
			.then((userData, commitData) => {
				Object.assign(
					gitData,
					userData,
					commitData,
					{roughRepoData},
					{pubReposOwned}
				);

				return gitData;
			})
			.catch((error) => {
				console.log(`error:`, error);
			});
	});
}
