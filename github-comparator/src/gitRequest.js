const gitGet = (url) => {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = () => {
			if (request.status == 200){
				resolve(JSON.parse(request.response));
			}
			else{
				reject(request.statusText);
			}
		};
		request.onerror = () => reject(request.statusText);
	});
}

const createUrl = (data, name) => {
	switch(data){
		case 'user': 
			return `https://api.github.com/users/${name}`;
			break;
		default:
			console.log('createUrl() in gitRequest.js is not setup for this case');
	}
}

export const getPlayerInfo = (player1name, player2name) => {
	var player1Url = createUrl(user, player1name);
	var player2Url = createUrl(user, player2name);

	var player1Info = gitGet(user, Player1Url);
	var player2Info = gitGet(user, Player2Url);

	player1Info.then(filterData).catch(error);
	player2Info.then(filterData).catch(error);	
}


